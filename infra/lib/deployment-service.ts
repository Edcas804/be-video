import { Construct } from "constructs"
import { CfnOutput, RemovalPolicy } from "aws-cdk-lib"
import { Distribution, ViewerProtocolPolicy } from "aws-cdk-lib/aws-cloudfront"
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins"
import { BlockPublicAccess, Bucket } from "aws-cdk-lib/aws-s3"
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment"

const path = "./resources/build"

/**
 * Are not included by default:
 * 400: Bad Request
 * 403: Forbidden
 * 404: Not Found
 * 405: Method Not Allowed
 * 414: Request-URI Too Long
 * 416: Range Not Satisfiable
 * 500: Internal Server Error
 * 501: Not Implemented
 * 502: Bad Gateway
 * 503: Service Unavailable
 * 504: Gateway Timeout
 */
const customErrorResponses = [
	{
		httpStatus: 400,
		responseHttpStatus: 200,
		responsePagePath: "/index.html",
	},
	{
		httpStatus: 403,
		responseHttpStatus: 200,
		responsePagePath: "/index.html",
	},
	{
		httpStatus: 404,
		responseHttpStatus: 200,
		responsePagePath: "/index.html",
	},
]

export class DeploymentService extends Construct {
	constructor(scope: Construct, id: string) {
		super(scope, id)

		const hostingBucket = new Bucket(this, "FrontendBucket", {
			autoDeleteObjects: true,
			blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
			removalPolicy: RemovalPolicy.DESTROY,
		})

		const distribution = new Distribution(this, "CloudfrontDistribution", {
			defaultBehavior: {
				origin: new S3Origin(hostingBucket),
				viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
			},
			defaultRootObject: "index.html",
			errorResponses: customErrorResponses,
		})

		new BucketDeployment(this, "BucketDeployment", {
			sources: [Source.asset(path)],
			destinationBucket: hostingBucket,
			distribution,
			distributionPaths: ["/*"],
		})

		new CfnOutput(this, "CloudFrontURL", {
			value: distribution.domainName,
			description: "The distribution URL",
			exportName: "CloudfrontURL",
		})

		new CfnOutput(this, "BucketName", {
			value: hostingBucket.bucketName,
			description: "The name of the S3 bucket",
			exportName: "BucketName",
		})
	}
}
