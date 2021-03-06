export default {
  button_simple:(color) => `tracking-lg bg-${color}-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm transition duration-150 ease-in-out`,
  button_outline:(color) => `tracking-lg bg-white hover:bg-${color}-500 text-${color}-700 text-sm hover:text-white py-2 px-4 border border-${color}-500 hover:border-transparent rounded transition duration-150 ease-in-out`,
  header_zIndex:10,
  mobile_menuTab_zIndex:9,
  filter_zIndex:8,
  filter: "fixed h-screen w-full transition duration-300 ease-in-out",
  input: "shadow-lg block w-full pl-7 pr-12 sm:text-sm sm:leading-5 rounded",
  navbar_desktop:"w-full h-full px-6 flex flex-row items-center justify-between text-gray-900 text-sm",
  navbar_tablet:"w-full h-full px-6 flex flex-col items-center justify-center text-gray-900",
  navbar_mobile:"w-full h-full px-6 flex flex-col items-center justify-center text-gray-900",
  profile_badge_container:"w-12 h-12 flex items-center justify-center",
  profile_badge:"w-12 h-12 rounded-full object-fill",
  mobile_menu_tab: "bg-white fixed transition duration-300 ease-in-out overflow-auto",
  mobile_menu_item: "w-full h-16 flex items-center justify-center bg-white mt-2 transition duration-300 ease-in-out hover:text-black text-gray-600 font-normal cursor-pointer text lowercase",
  logo_big: "w-20 h-20",
  logo_small: "w-16 h-16",
  logo_xs: "w-12 h-12",
  heading_sm:"text-xl uppercase tracking-widest font-hairline",
  heading_md:"text-3xl uppercase tracking-wider font-hairline",
  heading_lg:"text-5xl uppercase tracking-wider font-hairline",
  menuContainer_desktop:"w-6/12 h-full px-6 flex items-center justify-evenly",
  menuItem_desktop:"h-10 w-20 flex flex-col items-center justify-center",
  footer_container_desktop: "w-full h-64 text-gray-100 grid grid-cols-4 grid-rows-1 grid-flow-col gap-4",
  footer_grid_item: "w-full h-auto mt-4 flex flex-col items-center text-xs tracking-widest",
  footer_container_mobile: "w-full h-40 text-gray-100 flex flex-col items-center justify-center",
  footer_flex_item:"w-full h-auto flex justfy-center items-center",
  _bgColor: "#ecf0f1",
  _filterColor: "rgba(0,0,0, 0.65)",
  _footerColor: "#2d3436"
}