import { useEffect, useState } from "react";

const images = [
  "https://instagram.fmvf3-1.fna.fbcdn.net/v/t51.82787-15/613560532_17897922171367179_5571590672783020455_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=MzgwNzc3MTc3NjMwNzI5ODM4NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=xgIUnL5yDhUQ7kNvwG3h8uh&_nc_oc=AdlA1R9lCXUV7DAXSQiPNTF2ZYp4ECAXUgpukcREgTyK9ulZs02jzFN0sA5OcLMOyBg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmvf3-1.fna&_nc_gid=tbLU6sPGDxfopyMXQhip1Q&oh=00_AfqeK4RVops4oCrs-yrNCv3v1jV62bVIfNR8Eg82atZbZg&oe=6970AE92",

  "https://instagram.fmvf3-1.fna.fbcdn.net/v/t51.82787-15/604527484_17896369515367179_61773805310505971_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=Mzc5ODU5NjQwMDQ0MzQwOTU4MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzMjR4MTE3NS5zZHIuQzMifQ%3D%3D&_nc_ohc=iCGCfJHRj2AQ7kNvwEQDhbz&_nc_oc=AdnXz06zmktnzQwjcB3yvo3ASW4FVhyF1IswIXmrf1vw09TyrwF4gEvAcx16zklj7Zc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmvf3-1.fna&_nc_gid=blzAX-HS4t4QjYgxtPDv_w&oh=00_Afpny0oIpTdk5kySB9NDGphEyX8HqNDBP59n9tn-E6CdiA&oe=6970C472",

  "https://instagram.fmvf3-1.fna.fbcdn.net/v/t51.82787-15/581463201_17891352963367179_5510458784088038129_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=Mzc2NjQ2MjU3MDQ2ODEyNTMwMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTE1Mi5zZHIuQzMifQ%3D%3D&_nc_ohc=3XuPDXQcPTYQ7kNvwG6EApU&_nc_oc=AdlF5uQ7FNExGsS9xoGho0-ayE2-0-YCIqy_TY26MQHxlbFxCdFC070v1k7JJ-uaRAY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmvf3-1.fna&_nc_gid=blzAX-HS4t4QjYgxtPDv_w&oh=00_AfqWMHgNjMzdBhA66k6TLJNJNfYffKTNV7BjQOgqeohR_w&oe=6970CE47",

  "https://instagram.fmvf3-1.fna.fbcdn.net/v/t51.82787-15/522120548_17877523458367179_1724113375873071029_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzY4MDQ0NjQxNjgwODMzNDYyMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTUwNS5zZHIuQzMifQ%3D%3D&_nc_ohc=P0LP28FoYHUQ7kNvwHiudiH&_nc_oc=Admjzl_P_SnaVkSOm-JX5cSiUKhhbH0MszcNwdV0t24cBdQu1T386rwqcopO27CAY3w&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmvf3-1.fna&_nc_gid=blzAX-HS4t4QjYgxtPDv_w&oh=00_AfoCLafM8FI0sfVbUUsLvoOI6IujtMSiPAH23hOKO_PNHw&oe=6970B265",

  "https://instagram.fmvf3-1.fna.fbcdn.net/v/t51.82787-15/518887703_17876795286367179_6114892522096242172_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=MzY3NjE0NzE1MDUwOTY3ODAyNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTYzOS5zZHIuQzMifQ%3D%3D&_nc_ohc=Vzcvh5TtDkoQ7kNvwG6jfpP&_nc_oc=AdlCFWrpj_AhHnNnW72tyPRSC0NL6jwTlZ6nJ-Do5fRpfvtOweNGyrmeAlBO4v8ssh8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmvf3-1.fna&_nc_gid=blzAX-HS4t4QjYgxtPDv_w&oh=00_AfoB9jXwg7_zacYBXg0tqXjItaX9hwCzDDRG3McYlZwRCw&oe=6970BD51",

  "https://instagram.fmvf3-1.fna.fbcdn.net/v/t51.75761-15/502549758_17874915687367179_5330774864422515107_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzY2NTE0NjI2NjU0NDMxMjA5NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTY5MC5zZHIuQzMifQ%3D%3D&_nc_ohc=QtaRU6CQpJoQ7kNvwE9FR0o&_nc_oc=AdnWhKLM39F75CjjNBC9El5-hHdwUTeVARfmagBi43NPs4hYZCWD4ATLDATMBY9Uvus&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmvf3-1.fna&_nc_gid=fJV2ApcQSt-ZmP8qOUWV_w&oh=00_AfqnnTR7AjrGgvwFC8jrbKeMmgVJp4N5RfG8KLl9tQ6I0w&oe=6970D67D",

  "https://instagram.fmvf3-1.fna.fbcdn.net/v/t51.82787-15/583278125_17891573112367179_54907654660231497_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=Mzc2Nzk1MTUwOTI2MzY1MjU2Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=eajy3KeLeGIQ7kNvwGcI9kn&_nc_oc=Adnvr0rPjE7s_PUsQ_Q08UNVPw_1RHg_mIidFPbvfxKEEOjQ2M2H3v3OJRedJwZPpio&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmvf3-1.fna&_nc_gid=blzAX-HS4t4QjYgxtPDv_w&oh=00_AfplaoCksWY6zjC7WDeheWBcFJ588Gbtm8zdXKMo_hYB1g&oe=6970BCE3",

  "https://instagram.fmvf3-1.fna.fbcdn.net/v/t51.75761-15/487816842_17863442256367179_4038212684364990281_n.webp?_nc_cat=104&ig_cache_key=MzU5OTkzNDA5ODU2MDcyMzkwOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQzOC5zZHIuQzMifQ%3D%3D&_nc_ohc=mvvTyb5Ym9QQ7kNvwGNCmi0&_nc_oc=Adn97PGbKWFAMJrRKo4o3rodH4ZEJvHOz15vuZ0CaoF8snCT9AfcmguyHwczzdCzN_8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmvf3-1.fna&_nc_gid=fJV2ApcQSt-ZmP8qOUWV_w&oh=00_AfriJI4B9KGB2xDkluZhFvC2b7gAAsplDX-meFLkVjqhtg&oe=6970B153",

  " https://instagram.fmvf3-1.fna.fbcdn.net/v/t51.75761-15/479485929_17856903966367179_812923010137066063_n.webp?_nc_cat=105&ig_cache_key=MzU2NTk4OTA0NjU0NDE5NDg4MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4NC5zZHIuQzMifQ%3D%3D&_nc_ohc=gSG5ylJBxx4Q7kNvwGhAdyK&_nc_oc=Adm_qfV965Zf6LP040kR09RoRrHgWRWVeKzFQC0okcInb44MHTDBxE4SpcrrGXciMpk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmvf3-1.fna&_nc_gid=fJV2ApcQSt-ZmP8qOUWV_w&oh=00_Afo_fFC29FYjwXR7tbGgBwfb3MPpIXCqq37E7SWHEit7sA&oe=6970AFE8",
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden rounded-3xl shadow-2xl">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Festa ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* overlay suave */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
