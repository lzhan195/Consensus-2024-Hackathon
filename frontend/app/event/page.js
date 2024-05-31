import Image from "next/image";

export default function Landing() {
    return (
        <div
            class="flex flex-col items-center pt-4 mx-auto w-full bg-white rounded-3xl max-w-[480px]"
        >
            <div class="shrink-0 h-5 bg-black rounded-3xl w-[150px]"></div>
            <div
                class="flex gap-5 justify-between items-start mt-7 text-center text-black"
            >
                <div class="flex flex-col px-5 mt-2">
                    <div class="text-2xl font-bold">Events Near You</div>
                    <div class="flex gap-2 self-center mt-5 text-lg whitespace-nowrap">
                        <img
                            loading="lazy"
                            srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/c2fca423d96c4bc7ee488e2a94f711effe2d1e85e716e024a8e12217c599992d?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2fca423d96c4bc7ee488e2a94f711effe2d1e85e716e024a8e12217c599992d?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2fca423d96c4bc7ee488e2a94f711effe2d1e85e716e024a8e12217c599992d?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2fca423d96c4bc7ee488e2a94f711effe2d1e85e716e024a8e12217c599992d?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2fca423d96c4bc7ee488e2a94f711effe2d1e85e716e024a8e12217c599992d?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2fca423d96c4bc7ee488e2a94f711effe2d1e85e716e024a8e12217c599992d?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2fca423d96c4bc7ee488e2a94f711effe2d1e85e716e024a8e12217c599992d?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2fca423d96c4bc7ee488e2a94f711effe2d1e85e716e024a8e12217c599992d?apiKey=ae699537e68e4693924dac6381c34daf&"
                            class="shrink-0 self-start w-3.5 aspect-square"
                        />
                        <div>Boston</div>
                    </div>
                </div>
                <div
                    class="justify-center px-8 py-2 text-base whitespace-nowrap rounded-3xl bg-zinc-300"
                >
                    Verify
                </div>
            </div>
            <div
                class="flex flex-col p-2.5 mt-7 w-full font-bold text-center text-black rounded-3xl bg-zinc-300 max-w-[394px]"
            >
                <div class="self-center text-lg">Subscribe for full access</div>
                <div class="flex gap-0 mt-4 text-xs">
                    <div class="px-7 pt-3.5 pb-20 my-auto rounded-xl bg-stone-300">
                        Basic Pack
                    </div>
                    <div
                        class="items-center px-10 pt-3.5 pb-20 text-lg rounded-xl bg-neutral-400 h-[165px] w-[165px]"
                    >
                        Standard
                    </div>
                    <div
                        class="flex flex-col justify-center self-start px-1 py-px mt-3 whitespace-nowrap rounded-3xl bg-neutral-400"
                    >
                        <div class="z-10 items-start px-8 pt-3 pb-24 rounded-xl bg-stone-300">
                            Premium
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex gap-4 mt-8 w-full max-w-[383px]">
                <div class="shrink-0 h-36 rounded-xl bg-neutral-400 w-[183px]"></div>
                <div class="shrink-0 h-36 rounded-xl bg-neutral-400 w-[183px]"></div>
            </div>
            <div class="flex gap-3.5 mt-8 w-full max-w-[383px]">
                <div class="flex flex-1 gap-0">
                    <div class="shrink-0 h-36 rounded-xl bg-neutral-400 w-[183px]"></div>
                    <div
                        class="shrink-0 self-start mt-32 h-1 bg-white rounded-xl w-[66px]"
                    ></div>
                </div>
                <div class="shrink-0 h-36 rounded-xl bg-neutral-400 w-[183px]"></div>
            </div>
            <div class="flex gap-4 mt-7 w-full max-w-[383px]">
                <div class="shrink-0 h-36 rounded-xl bg-neutral-400 w-[183px]"></div>
                <div class="shrink-0 h-36 rounded-xl bg-neutral-400 w-[183px]"></div>
            </div>
            <div class="flex flex-col self-stretch px-12 py-3 w-full bg-zinc-300">
                <div class="flex gap-5 justify-between items-center">
                    <img
                        loading="lazy"
                        srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/eb04a6260f7d8c915950edfe155686844b82b6b4b29bdd39c6e946cc39c6c258?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb04a6260f7d8c915950edfe155686844b82b6b4b29bdd39c6e946cc39c6c258?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb04a6260f7d8c915950edfe155686844b82b6b4b29bdd39c6e946cc39c6c258?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb04a6260f7d8c915950edfe155686844b82b6b4b29bdd39c6e946cc39c6c258?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb04a6260f7d8c915950edfe155686844b82b6b4b29bdd39c6e946cc39c6c258?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb04a6260f7d8c915950edfe155686844b82b6b4b29bdd39c6e946cc39c6c258?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb04a6260f7d8c915950edfe155686844b82b6b4b29bdd39c6e946cc39c6c258?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb04a6260f7d8c915950edfe155686844b82b6b4b29bdd39c6e946cc39c6c258?apiKey=ae699537e68e4693924dac6381c34daf&"
                        class="shrink-0 self-stretch my-auto aspect-[1.27] w-[33px]"
                    />
                    <img
                        loading="lazy"
                        srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/979d9f3142ac1622700beac89c9b5504706bec7f5cb02414c7e144ea80b3833d?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/979d9f3142ac1622700beac89c9b5504706bec7f5cb02414c7e144ea80b3833d?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/979d9f3142ac1622700beac89c9b5504706bec7f5cb02414c7e144ea80b3833d?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/979d9f3142ac1622700beac89c9b5504706bec7f5cb02414c7e144ea80b3833d?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/979d9f3142ac1622700beac89c9b5504706bec7f5cb02414c7e144ea80b3833d?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/979d9f3142ac1622700beac89c9b5504706bec7f5cb02414c7e144ea80b3833d?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/979d9f3142ac1622700beac89c9b5504706bec7f5cb02414c7e144ea80b3833d?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/979d9f3142ac1622700beac89c9b5504706bec7f5cb02414c7e144ea80b3833d?apiKey=ae699537e68e4693924dac6381c34daf&"
                        class="shrink-0 self-stretch my-auto aspect-[1.61] w-[50px]"
                    />
                    <img
                        loading="lazy"
                        srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&"
                        class="shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
                    />
                    <img
                        loading="lazy"
                        srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&"
                        class="shrink-0 self-stretch w-8 aspect-[0.84]"
                    />
                    <img
                        loading="lazy"
                        srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/67bd076e8a7e53db0996bc3be1ee6fe6e5ad6bdc65958ec4c51954774a08747d?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/67bd076e8a7e53db0996bc3be1ee6fe6e5ad6bdc65958ec4c51954774a08747d?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/67bd076e8a7e53db0996bc3be1ee6fe6e5ad6bdc65958ec4c51954774a08747d?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/67bd076e8a7e53db0996bc3be1ee6fe6e5ad6bdc65958ec4c51954774a08747d?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/67bd076e8a7e53db0996bc3be1ee6fe6e5ad6bdc65958ec4c51954774a08747d?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/67bd076e8a7e53db0996bc3be1ee6fe6e5ad6bdc65958ec4c51954774a08747d?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/67bd076e8a7e53db0996bc3be1ee6fe6e5ad6bdc65958ec4c51954774a08747d?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/67bd076e8a7e53db0996bc3be1ee6fe6e5ad6bdc65958ec4c51954774a08747d?apiKey=ae699537e68e4693924dac6381c34daf&"
                        class="shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
                    />
                </div>
                <div
                    class="shrink-0 self-center mt-7 h-1.5 rounded-3xl bg-neutral-400 w-[187px]"
                ></div>
            </div>
        </div>
    )
}