import {MdLocalMovies, MdOutlineDashboard} from "react-icons/md";
import {PiTelevisionSimple} from "react-icons/pi";


export const mockdata = [
    { label: 'Dashboard', icon: <MdOutlineDashboard/>, link: '/' },
    { label: 'Restaurant', icon: <MdOutlineDashboard/>, drop:[
            { label: 'Categories', icon: MdOutlineDashboard, link: '/',drop:[
                    { label: 'Breakfast', icon: MdOutlineDashboard, link: '/restaurant/category/breakfast' },
                    { label: 'Lunch', icon: MdOutlineDashboard, link: '/restaurant/category/lunch' },
                    { label: 'Dinner', icon: MdOutlineDashboard, link: '/restaurant/category/dinner' },
                ] },
            { label: 'Orders', icon: MdOutlineDashboard, link: '/' , drop: [
                    {label: 'AddFood', icon: MdOutlineDashboard, link:'/restaurant/orders/food'},
                    {label: 'Customer Type List', icon: MdOutlineDashboard, link:'/restaurant/orders/list'}
                ]},
        ]},

    { label: 'Tvs', icon: PiTelevisionSimple, link: '/television/televisionList',
    drop: [
        {label: 'TV Lists', icon: MdOutlineDashboard, link:'/'},
        {label: 'TV Brand Add', icon: MdOutlineDashboard, link:'/'},
        {label: 'Serial Number', icon: MdOutlineDashboard, link:'/'},

    ]
    },
    { label: 'Movies', icon: MdLocalMovies, link: '/movies/movieList', drop: [
            {label: 'Movie List', icon: MdOutlineDashboard, link:'/'},
            {label: 'Select Movie', icon: MdOutlineDashboard, link:'/'},
            {label: 'Movie Type', icon: MdOutlineDashboard, link:'/'}
        ]},

];