import { LinksGroup } from "@/components/sidebar/LinksGroup";
import {mockdata} from "@/components/data/data";
const Sidebar = () => {
    const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

    return (
        <div className="h-screen bg-gray-900 text-white w-[280px]">
            <h1 className="p-16 font-bold">HOTEL AVELLINO</h1>
            <div className="px-4">
                <LinksGroup data={mockdata}/>
            </div>
        </div>
    );
}

export default Sidebar;
