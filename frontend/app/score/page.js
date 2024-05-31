import Image from "next/image";

export default function Landing() {
    return (
        <div
            class="flex flex-col pt-4 mx-auto w-full bg-white rounded-3xl max-w-[480px]"
        >
            <div class="shrink-0 self-center h-5 bg-black rounded-3xl w-[150px]"></div>
            <div class="flex flex-col px-4 mt-2 w-full">
                <div class="flex gap-5 w-full text-center whitespace-nowrap">
                    <div class="flex gap-1.5 my-auto text-sm text-black">
                        <img
                            loading="lazy"
                            srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/667764250eb4428c671870577272f55478de7b1b6453cef66266ee2d9c410e6a?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/667764250eb4428c671870577272f55478de7b1b6453cef66266ee2d9c410e6a?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/667764250eb4428c671870577272f55478de7b1b6453cef66266ee2d9c410e6a?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/667764250eb4428c671870577272f55478de7b1b6453cef66266ee2d9c410e6a?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/667764250eb4428c671870577272f55478de7b1b6453cef66266ee2d9c410e6a?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/667764250eb4428c671870577272f55478de7b1b6453cef66266ee2d9c410e6a?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/667764250eb4428c671870577272f55478de7b1b6453cef66266ee2d9c410e6a?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/667764250eb4428c671870577272f55478de7b1b6453cef66266ee2d9c410e6a?apiKey=ae699537e68e4693924dac6381c34daf&"
                            class="shrink-0 w-3.5 aspect-square"
                        />
                        <div class="my-auto">Connected</div>
                    </div>
                    <div
                        class="flex flex-auto gap-5 justify-between items-start px-px font-bold"
                    >
                        <div class="flex flex-col self-end mt-6">
                            <div class="text-2xl text-black">Account</div>
                            <div class="mt-3 text-lg text-green-600">Activated</div>
                        </div>
                        <img
                            loading="lazy"
                            srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/30b5694e9feb1a63fa83ee9e08d731db8fb59908ee0dabddc70f583b12b436f0?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/30b5694e9feb1a63fa83ee9e08d731db8fb59908ee0dabddc70f583b12b436f0?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30b5694e9feb1a63fa83ee9e08d731db8fb59908ee0dabddc70f583b12b436f0?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/30b5694e9feb1a63fa83ee9e08d731db8fb59908ee0dabddc70f583b12b436f0?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/30b5694e9feb1a63fa83ee9e08d731db8fb59908ee0dabddc70f583b12b436f0?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30b5694e9feb1a63fa83ee9e08d731db8fb59908ee0dabddc70f583b12b436f0?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/30b5694e9feb1a63fa83ee9e08d731db8fb59908ee0dabddc70f583b12b436f0?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/30b5694e9feb1a63fa83ee9e08d731db8fb59908ee0dabddc70f583b12b436f0?apiKey=ae699537e68e4693924dac6381c34daf&"
                            class="shrink-0 self-start aspect-square w-[31px]"
                        />
                    </div>
                </div>
                <div class="shrink-0 mt-3 h-px rounded-3xl bg-zinc-400"></div>
                <img
                    loading="lazy"
                    srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/830499f8f89c3270f3871c1af040b596d0deafae13867746a8e0b4f3666170c1?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/830499f8f89c3270f3871c1af040b596d0deafae13867746a8e0b4f3666170c1?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/830499f8f89c3270f3871c1af040b596d0deafae13867746a8e0b4f3666170c1?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/830499f8f89c3270f3871c1af040b596d0deafae13867746a8e0b4f3666170c1?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/830499f8f89c3270f3871c1af040b596d0deafae13867746a8e0b4f3666170c1?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/830499f8f89c3270f3871c1af040b596d0deafae13867746a8e0b4f3666170c1?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/830499f8f89c3270f3871c1af040b596d0deafae13867746a8e0b4f3666170c1?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/830499f8f89c3270f3871c1af040b596d0deafae13867746a8e0b4f3666170c1?apiKey=ae699537e68e4693924dac6381c34daf&"
                    class="self-center mt-8 aspect-[1.08] w-[55px]"
                />
                <img
                    loading="lazy"
                    srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/e4d9cbdfde5c5f4cad3b53f663aec853fec38e3a0ff09e3ec60a77143bcee86c?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4d9cbdfde5c5f4cad3b53f663aec853fec38e3a0ff09e3ec60a77143bcee86c?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4d9cbdfde5c5f4cad3b53f663aec853fec38e3a0ff09e3ec60a77143bcee86c?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4d9cbdfde5c5f4cad3b53f663aec853fec38e3a0ff09e3ec60a77143bcee86c?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4d9cbdfde5c5f4cad3b53f663aec853fec38e3a0ff09e3ec60a77143bcee86c?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4d9cbdfde5c5f4cad3b53f663aec853fec38e3a0ff09e3ec60a77143bcee86c?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4d9cbdfde5c5f4cad3b53f663aec853fec38e3a0ff09e3ec60a77143bcee86c?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4d9cbdfde5c5f4cad3b53f663aec853fec38e3a0ff09e3ec60a77143bcee86c?apiKey=ae699537e68e4693924dac6381c34daf&"
                    class="self-center mt-24 aspect-square w-[50px]"
                />
                <div class="self-center mt-1.5 text-lg text-center text-black">Buy</div>
                <div
                    class="flex gap-5 justify-between self-center mt-16 max-w-full text-lg font-bold text-center text-black whitespace-nowrap w-[252px]"
                >
                    <div>Score</div>
                    <div>Activity</div>
                </div>
                <div class="shrink-0 mt-3 rounded-3xl bg-zinc-400 h-[3px]"></div>
                <div class="shrink-0 h-px rounded-3xl bg-zinc-400"></div>
                <div
                    class="flex flex-col justify-center mt-12 bg-orange-200 rounded-[50px]"
                >
                    <div
                        class="flex flex-col justify-center items-start px-16 py-1 bg-amber-400 rounded-[50px]"
                    >
                        <div
                            class="shrink-0 bg-red-600 border-red-600 border-solid border-[3px] h-[59px] w-[145px]"
                        ></div>
                    </div>
                </div>
                <div class="mt-2 text-xs font-bold text-center text-black">
                    Minimum score required
                </div>
            </div>
            <div class="flex flex-col px-9 pt-1.5 pb-3 mt-64 w-full bg-zinc-300">
                <div class="flex gap-5 justify-between items-center">
                    <img
                        loading="lazy"
                        srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/ac11bf70b581a48e2f63805d20b399d3c9aa2bb6b224266ac8c51900fe6f1d17?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac11bf70b581a48e2f63805d20b399d3c9aa2bb6b224266ac8c51900fe6f1d17?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac11bf70b581a48e2f63805d20b399d3c9aa2bb6b224266ac8c51900fe6f1d17?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac11bf70b581a48e2f63805d20b399d3c9aa2bb6b224266ac8c51900fe6f1d17?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac11bf70b581a48e2f63805d20b399d3c9aa2bb6b224266ac8c51900fe6f1d17?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac11bf70b581a48e2f63805d20b399d3c9aa2bb6b224266ac8c51900fe6f1d17?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac11bf70b581a48e2f63805d20b399d3c9aa2bb6b224266ac8c51900fe6f1d17?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac11bf70b581a48e2f63805d20b399d3c9aa2bb6b224266ac8c51900fe6f1d17?apiKey=ae699537e68e4693924dac6381c34daf&"
                        class="shrink-0 self-start w-10 aspect-[1.03]"
                    />
                    <img
                        loading="lazy"
                        srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/2856daf6b7ab81ac28463fff2d99fc69993bf13d0dfa5674a2477e1326ee4623?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2856daf6b7ab81ac28463fff2d99fc69993bf13d0dfa5674a2477e1326ee4623?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2856daf6b7ab81ac28463fff2d99fc69993bf13d0dfa5674a2477e1326ee4623?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2856daf6b7ab81ac28463fff2d99fc69993bf13d0dfa5674a2477e1326ee4623?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2856daf6b7ab81ac28463fff2d99fc69993bf13d0dfa5674a2477e1326ee4623?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2856daf6b7ab81ac28463fff2d99fc69993bf13d0dfa5674a2477e1326ee4623?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2856daf6b7ab81ac28463fff2d99fc69993bf13d0dfa5674a2477e1326ee4623?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2856daf6b7ab81ac28463fff2d99fc69993bf13d0dfa5674a2477e1326ee4623?apiKey=ae699537e68e4693924dac6381c34daf&"
                        class="shrink-0 self-stretch my-auto aspect-[1.12] w-[35px]"
                    />
                    <img
                        loading="lazy"
                        srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&"
                        class="shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
                    />
                    <img
                        loading="lazy"
                        srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&"
                        class="shrink-0 self-start w-8 aspect-[0.84]"
                    />
                    <img
                        loading="lazy"
                        srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/1d5b592715856015b44a13571ea4a654809d8ed1977d66279e0a5595e75460c6?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d5b592715856015b44a13571ea4a654809d8ed1977d66279e0a5595e75460c6?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d5b592715856015b44a13571ea4a654809d8ed1977d66279e0a5595e75460c6?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d5b592715856015b44a13571ea4a654809d8ed1977d66279e0a5595e75460c6?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d5b592715856015b44a13571ea4a654809d8ed1977d66279e0a5595e75460c6?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d5b592715856015b44a13571ea4a654809d8ed1977d66279e0a5595e75460c6?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d5b592715856015b44a13571ea4a654809d8ed1977d66279e0a5595e75460c6?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d5b592715856015b44a13571ea4a654809d8ed1977d66279e0a5595e75460c6?apiKey=ae699537e68e4693924dac6381c34daf&"
                        class="shrink-0 self-stretch my-auto aspect-[1.61] w-[50px]"
                    />
                </div>
                <div
                    class="shrink-0 self-center mt-7 h-1.5 rounded-3xl bg-neutral-400 w-[187px]"
                ></div>
            </div>
        </div>
    )
}