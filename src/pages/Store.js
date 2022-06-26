import React from "react";

function Store() {
  const products = [
    {
      id: 1,
      name: "HP 100- 1600 DPI USB Wired Mouse, Ambidextrous Design, 3 Buttons and Built-in Scrolling / 3 Years Warranty (6VY96AA)",
      href: "https://www.amazon.in/dp/B083RD1J99/ref=s9_acsd_al_bw_c2_x_2_i?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-4&pf_rd_r=YWVQFCJ9PQM5Y9TFHVYW&pf_rd_t=101&pf_rd_p=efb49d1f-8896-46bf-b518-80ecd937a886&pf_rd_i=27970137031",
      price: "₹249",
      brand: "HP",
      imageSrc: "https://m.media-amazon.com/images/I/71ZqmiRNQjL._SX679_.jpg",
    },
    {
      id: 2,
      name: "HP 230 Wireless Keyboard with 12 Function Keys, 16 Month Life Battery, 2.4GHz Wireless Connection Up to 32.8ft / 3 Years Warranty (3L1E7AA), Black",
      href: "https://www.amazon.in/dp/B09GBC1H4Z/ref=s9_acsd_al_bw_c2_x_4_i?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-4&pf_rd_r=YWVQFCJ9PQM5Y9TFHVYW&pf_rd_t=101&pf_rd_p=efb49d1f-8896-46bf-b518-80ecd937a886&pf_rd_i=27970137031",
      price: "₹1,099",
      brand: "HP",
      imageSrc: "https://m.media-amazon.com/images/I/71ghHm8ABpL._SX679_.jpg",
    },
    {
      id: 3,
      name: "Hp Stereo 3.5Mm G2 Wired Over Ear Headphones with Vegan Leather Earcups, with Mic, Volume Control and Mute Button (428H6Aa, Black)",
      href: "https://www.amazon.in/dp/B09GFKS743/ref=s9_acsd_al_bw_c2_x_8_i?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-4&pf_rd_r=YWVQFCJ9PQM5Y9TFHVYW&pf_rd_t=101&pf_rd_p=efb49d1f-8896-46bf-b518-80ecd937a886&pf_rd_i=27970137031",
      price: "₹1,049",
      brand: "HP",
      imageSrc: "https://m.media-amazon.com/images/I/61tssi-Ph8L._SX522_.jpg",
    },
    {
      id: 4,
      name: "HP w300 1080P 30 FPS FHD Webcam with Built-in Dual Digital Mic, Plug and Play Setup, Wide-Angle View for Video Calling on Skype, Zoom, Microsoft Teams and Other Apps/ 1 Year Warranty (1W4W5AA),Black",
      href: "https://www.amazon.in/dp/B08FTH38QX/ref=s9_acsd_al_bw_c2_x_11_i?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-4&pf_rd_r=YWVQFCJ9PQM5Y9TFHVYW&pf_rd_t=101&pf_rd_p=efb49d1f-8896-46bf-b518-80ecd937a886&pf_rd_i=27970137031",
      price: "₹3,799",
      brand: "HP",
      imageSrc: "https://m.media-amazon.com/images/I/61Lvv5-UfCL._SY450_.jpg",
    },
    {
      id: 5,
      name: "HP K500F Backlit Membrane Wired Gaming Keyboard with Mixed Color Lighting, Metal Panel with Logo Lighting, 26 Anti-Ghosting Keys, and Windows Lock Key / 3 Years Warranty(7ZZ97AA)",
      href: "https://www.amazon.in/HP-K500F-Gaming-Keyboard-7ZZ97AA/dp/B08498D67S/ref=lp_27970137031_1_7",
      price: "₹999",
      brand: "HP",
      imageSrc: "https://m.media-amazon.com/images/I/71f+Iz89ozL._SY450_.jpg",
    },
    {
      id: 6,
      name: "Proffisy Laptop Stand Ergonomic Height Angle Adjustable Laptop Riser for Desk, with Honeycomb Heat-Vent, Compatible for Laptop MacBook, Air, Pro, Dell XPS All Laptops 11-17",
      href: "https://www.amazon.in/proffisy-Laptop-Stand-Adjustable-Compatible/dp/B08P31F1PM/ref=pd_rhf_gw_s_pd_crcd_sccl_1_2/259-9913897-6751363?pd_rd_w=CkmZr&content-id=amzn1.sym.dcf9b861-ea71-4cd9-870f-f1d20747f687&pf_rd_p=dcf9b861-ea71-4cd9-870f-f1d20747f687&pf_rd_r=W2ZPDR733N0VTVA5PCN0&pd_rd_wg=xK9xG&pd_rd_r=05d26a66-c9b9-4059-bc68-2658f2917c76&pd_rd_i=B08P31F1PM&psc=1",
      brand: "Proffisy",
      price: "₹4,499",
      imageSrc: "https://m.media-amazon.com/images/I/617zI4qIVQL._SX425_.jpg",
    },
    {
      id: 7,
      name: "Apple Watch Series 7 (GPS, 45mm) - Blue Aluminium Case with Abyss Blue Sport Band - Regular",
      href: "https://www.amazon.in/Apple-Watch-GPS-45mm-Aluminium/dp/B09HHDFKFD/ref=sr_1_14?crid=1V85F11NDZLRA&keywords=apple&qid=1654318526&sprefix=app%2Caps%2C395&sr=8-14&th=1",
      price: "₹42,630",
      imageSrc: "https://m.media-amazon.com/images/I/71Tlukf9FTL._SX522_.jpg",
      brand: "Apple",
    },
    {
      id: 8,
      name: "Cosmic Byte Meteoroid Laptop Cooling Pad with 6 Fan Upto 17 inch laptops (Black/Blue)",
      href: "https://www.amazon.in/Cosmic-Byte-Meteoroid-Cooling-laptops/dp/B08P5PBPDC/ref=pd_rhf_gw_s_pd_crcd_sccl_1_9/259-9913897-6751363?pd_rd_w=CkmZr&content-id=amzn1.sym.dcf9b861-ea71-4cd9-870f-f1d20747f687&pf_rd_p=dcf9b861-ea71-4cd9-870f-f1d20747f687&pf_rd_r=W2ZPDR733N0VTVA5PCN0&pd_rd_wg=xK9xG&pd_rd_r=05d26a66-c9b9-4059-bc68-2658f2917c76&pd_rd_i=B08P5PBPDC&psc=1",
      price: "₹1,799",
      imageSrc: "https://m.media-amazon.com/images/I/81XQAT9T8MS._SX355_.jpg",
      brand: "Cosmic Byte",
    },
  ];
  return (
    <div>
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <nav id="store" className="w-full z-30 top-0 px-6 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <a
                className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-3xl "
                href="#"
              >
                Store
              </a>
            </div>
          </nav>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-4 md:p-2 mb-14">
            {products.map((product) => (
              <a key={product.id} href={product.href} target="_blank">
                <img
                  className="hover:grow hover:shadow-lg duration-200"
                  src={product.imageSrc}
                />
                <div className="pt-3 flex items-center justify-between">
                  <p className="text-base font-semibold">{product.name}</p>
                </div>
                <p className="">Brand: <span className="font-semibold">{product.brand}</span></p>
                <p className="pt-1 text-gray-900 font-medium">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Store;
