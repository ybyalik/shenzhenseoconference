import { Users, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import Navigation from "@/components/navigation";
import StickyCTA from "@/components/sticky-cta";

import adamPalmeterImg from "@assets/Adam-Palmeter_1763288491458.webp";
import alexZhangImg from "@assets/alex-zhang_1763288491458.jpg";
import aleydaSolisImg from "@assets/Aleyda-Solis-1_1763288491458.webp";
import andyWuImg from "@assets/Andy-Wu_1763288491458.jpg";
import anirudhAgarwalImg from "@assets/Anirudh-Agarwal-1_1763288491458.webp";
import behdadJamshidiImg from "@assets/Behdad-Jamshidi_1763288491461.webp";
import billImg from "@assets/bill_1763288491461.jpg";
import canChanImg from "@assets/Can-Chan-1_1763288491461.webp";
import carlBorgImg from "@assets/Carl-Borg_1763288491461.webp";
import celinaTaoImg from "@assets/Celina-Tao_1763288491461.jpg";
import charlesFloateImg from "@assets/Charles-Floate_1763288491461.jpg";
import cristinaSongImg from "@assets/Cristina-Song_1763288491462.jpg";
import elisaYazidiImg from "@assets/Elisa-Yazidi_1763288491462.webp";
import garyIllyesImg from "@assets/Gary-Illyes-1_1763288491462.webp";
import geFeiImg from "@assets/ge-fei_1763288491462.jpg";
import geoffreyLeImg from "@assets/geoffrey-le_1763288491462.jpg";
import georgiaTanImg from "@assets/Georgia-Tan-1_1763288491462.webp";
import gregGibasImg from "@assets/Greg-Gibas_1763288491462.webp";
import gregHeilersImg from "@assets/Greg-Heilers_1763288491463.webp";
import image6Img from "@assets/image6_1763288491463.webp";
import jabezReubenImg from "@assets/Jabez-Reuben_1763288535685.webp";
import jakeStainerImg from "@assets/Jake-Stainer-1_1763288535685.webp";
import jamieIfImg from "@assets/jamie-if_1763288535685.webp";
import jasonLeeImg from "@assets/Jason-Lee_1763288535686.webp";
import jessicaXiaoImg from "@assets/jessica-xiao_1763288535686.jpg";
import jpZhangImg from "@assets/J.P.-Zhang_1763288535679.webp";
import kenichiSuzukiImg from "@assets/Kenichi-Suzuki_1763288535686.jpg";
import kevinJeppesenImg from "@assets/Kevin-Jeppesen_1763288535686.webp";
import kevinMengImg from "@assets/Kevin-Meng_1763288535687.webp";
import kyleRoofImg from "@assets/Kyle-Roof-1_1763288535687.webp";
import lawrenceHitchesImg from "@assets/Lawrence-Hitches_1763288535687.webp";
import leslieZhanImg from "@assets/leslie-zhan_1763288535688.jpg";
import madsSingersImg from "@assets/Mads-Singers-1_1763288535688.webp";
import marcMollerImg from "@assets/Marc-Moller_1763288535688.webp";
import marcusPentzekImg from "@assets/Marcus-Pentzek_1763288535689.webp";
import massimilianoGeraciImg from "@assets/Massimiliano-Geraci_1763288535689.webp";
import maurizioPetroneImg from "@assets/Maurizio-Petrone-1_1763288535689.webp";
import mengyingXiangImg from "@assets/Mengying-Xiang_1763288535690.jpg";
import mikeDeeImg from "@assets/Mike-Dee-1_1763288535690.webp";
import mikeMicheliniImg from "@assets/Mike-Michelini_1763288535690.webp";
import mudiElsaidImg from "@assets/Mudi-Elsaid_1763288552076.webp";
import nataliaWitczykImg from "@assets/Natalia-Witczyk_1763288552079.webp";
import nickHuImg from "@assets/Nick-Hu_1763288552079.jpg";
import nielsZeeImg from "@assets/niels-zee_1763288552080.webp";
import nikRangerImg from "@assets/Nik-Ranger_1763288552080.webp";
import ningGaoImg from "@assets/Ning-Gao_1763288552080.jpg";
import nitinManchandaImg from "@assets/Nitin-Manchanda_1763288552080.webp";
import raneeZhangImg from "@assets/Ranee-Zhang_1763288552080.png";
import rivenGaoImg from "@assets/Riven-Gao_1763288552080.jpg";
import rogerImg from "@assets/Roger_1763288552080.webp";
import sachaFournierImg from "@assets/Sacha-Fournier_1763288552081.jpg";
import sarahPokornaImg from "@assets/Sarah-Pokorna_1763288552081.webp";
import shaneDutkaImg from "@assets/Shane-Dutka-1_1763288552081.webp";
import simonSuImg from "@assets/simon-su_1763288552081.jpg";
import spanChenImg from "@assets/span-chen_1763288552081.jpg";
import starkPuImg from "@assets/Stark-Pu_1763288552081.jpg";
import stevenKhannaImg from "@assets/Steven-Khanna_1763288552082.webp";
import stewartVickersImg from "@assets/Stewart-Vickers-1_1763288552082.webp";
import terryKyleImg from "@assets/Terry-Kyle_1763288552082.webp";
import tiffanyLeiImg from "@assets/tiffany-lei_1763288552082.jpg";
import tomQiaoImg from "@assets/Tom-Qiao_1763288561181.webp";
import tomSoImg from "@assets/tom-so_1763288561181.jpg";
import tonyYanImg from "@assets/Tony-Yan_1763288561181.jpg";
import veroniqueDuongImg from "@assets/Veronique-Duong_1763288561181.jpg";
import yansirImg from "@assets/yansir_1763288561181.jpg";
import yichenGuoImg from "@assets/Yichen-Guo_1763288561182.jpg";
import yuryByalikImg from "@assets/yury-byalik_1763288561182.webp";
import zacImg from "@assets/Zac_1763288561182.webp";
import zackFranklinImg from "@assets/Zack-Franklin_1763288561182.webp";

const speakers = [
  { name: "Adam Palmeter", image: adamPalmeterImg },
  { name: "Alex Zhang", image: alexZhangImg },
  { name: "Aleyda Solis", image: aleydaSolisImg },
  { name: "Andy Wu", image: andyWuImg },
  { name: "Anirudh Agarwal", image: anirudhAgarwalImg },
  { name: "Behdad Jamshidi", image: behdadJamshidiImg },
  { name: "Bill", image: billImg },
  { name: "Can Chan", image: canChanImg },
  { name: "Carl Borg", image: carlBorgImg },
  { name: "Celina Tao", image: celinaTaoImg },
  { name: "Charles Floate", image: charlesFloateImg },
  { name: "Cristina Song", image: cristinaSongImg },
  { name: "Elisa Yazidi", image: elisaYazidiImg },
  { name: "Gary Illyes", image: garyIllyesImg },
  { name: "Ge Fei", image: geFeiImg },
  { name: "Geoffrey Le", image: geoffreyLeImg },
  { name: "Georgia Tan", image: georgiaTanImg },
  { name: "Greg Gibas", image: gregGibasImg },
  { name: "Greg Heilers", image: gregHeilersImg },
  { name: "Speaker", image: image6Img },
  { name: "Jabez Reuben", image: jabezReubenImg },
  { name: "Jake Stainer", image: jakeStainerImg },
  { name: "Jamie If", image: jamieIfImg },
  { name: "Jason Lee", image: jasonLeeImg },
  { name: "Jessica Xiao", image: jessicaXiaoImg },
  { name: "J.P. Zhang", image: jpZhangImg },
  { name: "Kenichi Suzuki", image: kenichiSuzukiImg },
  { name: "Kevin Jeppesen", image: kevinJeppesenImg },
  { name: "Kevin Meng", image: kevinMengImg },
  { name: "Kyle Roof", image: kyleRoofImg },
  { name: "Lawrence Hitches", image: lawrenceHitchesImg },
  { name: "Leslie Zhan", image: leslieZhanImg },
  { name: "Mads Singers", image: madsSingersImg },
  { name: "Marc Moller", image: marcMollerImg },
  { name: "Marcus Pentzek", image: marcusPentzekImg },
  { name: "Massimiliano Geraci", image: massimilianoGeraciImg },
  { name: "Maurizio Petrone", image: maurizioPetroneImg },
  { name: "Mengying Xiang", image: mengyingXiangImg },
  { name: "Mike Dee", image: mikeDeeImg },
  { name: "Mike Michelini", image: mikeMicheliniImg },
  { name: "Mudi Elsaid", image: mudiElsaidImg },
  { name: "Natalia Witczyk", image: nataliaWitczykImg },
  { name: "Nick Hu", image: nickHuImg },
  { name: "Niels Zee", image: nielsZeeImg },
  { name: "Nik Ranger", image: nikRangerImg },
  { name: "Ning Gao", image: ningGaoImg },
  { name: "Nitin Manchanda", image: nitinManchandaImg },
  { name: "Ranee Zhang", image: raneeZhangImg },
  { name: "Riven Gao", image: rivenGaoImg },
  { name: "Roger", image: rogerImg },
  { name: "Sacha Fournier", image: sachaFournierImg },
  { name: "Sarah Pokorna", image: sarahPokornaImg },
  { name: "Shane Dutka", image: shaneDutkaImg },
  { name: "Simon Su", image: simonSuImg },
  { name: "Span Chen", image: spanChenImg },
  { name: "Stark Pu", image: starkPuImg },
  { name: "Steven Khanna", image: stevenKhannaImg },
  { name: "Stewart Vickers", image: stewartVickersImg },
  { name: "Terry Kyle", image: terryKyleImg },
  { name: "Tiffany Lei", image: tiffanyLeiImg },
  { name: "Tom Qiao", image: tomQiaoImg },
  { name: "Tom So", image: tomSoImg },
  { name: "Tony Yan", image: tonyYanImg },
  { name: "Veronique Duong", image: veroniqueDuongImg },
  { name: "Yansir", image: yansirImg },
  { name: "Yichen Guo", image: yichenGuoImg },
  { name: "Yury Byalik", image: yuryByalikImg },
  { name: "Zac", image: zacImg },
  { name: "Zack Franklin", image: zackFranklinImg },
];

export default function Speakers() {
  useEffect(() => {
    document.title = "2025 Speakers - Shenzhen SEO Conference 2026";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Meet the expert speakers from the 2025 Shenzhen SEO Conference. Industry leaders sharing insights on international SEO, digital marketing, and cross-border strategies.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-bg relative overflow-hidden" data-testid="speakers-hero">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-speakers-title">
            Conference Speakers
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto" data-testid="text-speakers-subtitle">
            Presenting the expert lineup from our 2025 conference. These industry leaders shared their insights on international SEO, digital marketing strategies, and cross-border growth.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">

          <Card className="p-6 mb-12 bg-gradient-to-r from-purple-600 to-blue-600 border-0" data-testid="card-join-2026">
            <div className="flex items-start gap-4 text-white">
              <Globe className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Join Us in 2026</h2>
                <p className="text-purple-100">
                  The 2026 Shenzhen SEO Conference is on the horizon with this year's speaker lineup soon to be announced. Secure your spot early and be part of the community shaping the future of international SEO.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                data-testid={`speaker-card-${index}`}
                className="group"
              >
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3 bg-white">
                    <h3 className="font-semibold text-sm text-gray-900 text-center line-clamp-2">
                      {speaker.name}
                    </h3>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="p-8 bg-gray-50 border-2 border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Be Part of 2026
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Experience world-class presentations, networking opportunities, and cutting-edge SEO insights at the 2026 Shenzhen SEO Conference. Pre-order your tickets today and join industry leaders from around the globe.
              </p>
              <a
                href="/#tickets"
                data-testid="link-tickets"
                className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Pre-Order Tickets
              </a>
            </Card>
          </div>
        </div>
      </section>
      <StickyCTA />
    </div>
  );
}
