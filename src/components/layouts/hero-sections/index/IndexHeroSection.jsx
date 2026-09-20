"use client";

import "./_index-hero-section.scss";
import Link from "next/link";
import Title from "@/components/elements/title/Title";
import Container from "@/components/elements/container/Container";
import { motion } from "motion/react";

const IndexHeroSection = () => {
  return (
    <>
      <div className="desktop-header relative hidden min-h-[800px] flex-col justify-center lg:flex">
        <Container>
          <div className="relative grid min-h-[720px] grid-cols-2">
            <div className="relative z-10 flex flex-col justify-center">
              <Title type="h1" classes="mb-5 text-5xl font-bold text-white">
                زیورآلات طلا
                <br />
                برای هر لحظهٔ خاص
              </Title>
              <p className="my-4 mt-3 max-w-xl text-2xl text-white">
                گردنبند، دستبند و ست‌های ۱۸ عیار با ضمانت اصالت — انتخاب و سفارش آنلاین از سون زر.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="#collections"
                  className="rounded-xl bg-[#b47d27] px-6 py-3 text-sm font-bold text-white hover:bg-[#a06c1e]"
                >
                  مشاهده ویترین
                </Link>
                <Link
                  href="/order"
                  className="rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  ثبت سفارش
                </Link>
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-[550px] left-[200px]">
              <div className="flex justify-center">
                <motion.div
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    repeatType: "reverse",
                  }}
                  animate={{
                    x: 1,
                    y: [50, 150],
                  }}
                >
                  <img src="/img/goldbar.png" width={200} alt="" />
                </motion.div>
              </div>
            </div>
            <img
              src="/img/hand.png"
              width={550}
              className="pointer-events-none absolute bottom-0 left-0 z-[1] w-[550px] max-w-[55vw]"
              alt=""
            />
          </div>
        </Container>
      </div>

      <div className="mobile-header relative z-0 flex flex-col justify-center lg:hidden">
        <div className="relative flex flex-col items-center justify-center p-3">
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute -top-10 left-1/2 z-0 -translate-x-1/2 transform">
                <motion.div
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    repeatType: "reverse",
                  }}
                  animate={{
                    x: 1,
                    y: [-60, 0],
                  }}
                >
                  <img src="/img/goldbar.png" width={150} alt="" />
                </motion.div>
              </div>
              <img src="/img/hand.png" width={400} className="relative" alt="" />
            </div>
          </div>

          <div className="relative z-20 mx-2 mb-3 mt-32 w-full rounded-2xl bg-black/20 p-3 text-center backdrop-blur-sm">
            <Title type="h1" classes="mb-5 text-3xl font-bold text-white">
              زیورآلات طلا برای هر لحظهٔ خاص
            </Title>
            <p className="my-4 mt-3 text-lg text-white/90">
              مجموعهٔ گردنبند و زیورآلات ۱۸ عیار — سفارش آنلاین از سون زر.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="#collections" className="rounded-xl bg-[#b47d27] px-5 py-2.5 text-sm font-bold text-white">
                ویترین
              </Link>
              <Link href="/order" className="rounded-xl border border-white/40 px-5 py-2.5 text-sm text-white">
                ثبت سفارش
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexHeroSection;
