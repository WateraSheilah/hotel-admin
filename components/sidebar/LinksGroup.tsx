import {NavLink} from "@mantine/core";
import {MdLocalMovies} from "react-icons/md";

type LinksGroupProps = {
    data
};

export function LinksGroup({data }: LinksGroupProps) {
    return (
        data.map(dt=>(
            <NavLink
                label={dt.label}
                href={dt.link}
                leftSection={dt.icon}
            >
                {
                    dt.drop && dt.drop.map(
                        nested=>(
                            <NavLink label={nested.label} href={nested.link} leftSection={nested.icon}>
                                {
                                    nested.drop&&nested.drop.map(nest2=>(
                                        <NavLink label={nest2.label} href={nest2.link}/>
                                    ))
                                }
                            </NavLink>
                        )
                    )
                }
            </NavLink>))

        // <>
        //     <div className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-700 rounded" onClick={toggleOpened}>
        //         <Group noWrap>
        //             <div className="flex items-center">
        //                 <Icon size={20} style={{ marginRight: '0.5rem' }} />
        //                 <Text>{label}</Text>
        //             </div>
        //         </Group>
        //         {links.length > 0 && (opened ? <RiArrowDownSLine size={16} /> : <RiArrowLeftSLine size={16} />)}
        //     </div>
        //     {links.length > 0 && (
        //         <Collapse in={opened}>
        //             <div className="ml-6">
        //                 {links.map((link) => (
        //                     <div key={link.label}>
        //                         <Link href={link.link} passHref>
        //                             <a className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-700 rounded">
        //                                 <Group noWrap>
        //                                     <div className="flex items-center">
        //                                         <Text>{link.label}</Text>
        //                                     </div>
        //                                 </Group>
        //                             </a>
        //                         </Link>
        //                         {link.links && (
        //                             <Collapse in={opened}>
        //                                 <div className="ml-6">
        //                                     {link.links.map((sublink) => (
        //                                         <Link href={sublink.link} passHref key={sublink.label}>
        //                                             <a className="p-2 cursor-pointer hover:bg-gray-700 rounded ml-6">
        //                                                 {sublink.label}
        //                                             </a>
        //                                         </Link>
        //                                     ))}
        //                                 </div>
        //                             </Collapse>
        //                         )}
        //                     </div>
        //                 ))}
        //             </div>
        //         </Collapse>
        //     )}
        // </>
    );
}
