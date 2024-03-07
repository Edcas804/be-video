import CardSkeleton from "./CardSkeleton"
import ListSkeleton from "./ListSkeleton"
import WidgetSkeleton from "./WidgetSkeleton"

const DashboardSkeleton = () => {
	return (
		<section className="flex gap-5 p-5">
			<CardSkeleton />
			<WidgetSkeleton />
			<ListSkeleton />
		</section>
	)
}

export default DashboardSkeleton
