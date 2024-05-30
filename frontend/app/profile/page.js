import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col pt-4 mx-auto w-full bg-white rounded-3xl max-w-[480px]">
            <div className="flex flex-col px-5 w-full">
                <div className="flex gap-5 self-center w-full max-w-[366px]">
                    <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                        <div className="shrink-0 self-end h-5 bg-black rounded-3xl w-[150px]" />
                        <div className="mt-6 text-2xl font-bold text-center text-black">
                            Profile
                        </div>
                        <div className="flex gap-2 mt-5">
                            <div className="flex flex-col justify-center items-center rounded-full bg-zinc-300 h-[53px] w-[53px]">
                                <div className="shrink-0 rounded-full bg-zinc-300 h-[53px] w-[53px]" />
                            </div>
                            <div className="flex flex-col self-start mt-2 text-center text-black">
                                <div className="text-base font-bold">Nathalie Ly</div>
                                <div className="justify-center px-3 py-2 mt-1.5 text-xs rounded-2xl bg-zinc-300">
                                    Complete profile
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b781cb98f6d865ef14a831642ba9626faafc6bd1dccf9f8e353aeb31dd786507?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b781cb98f6d865ef14a831642ba9626faafc6bd1dccf9f8e353aeb31dd786507?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b781cb98f6d865ef14a831642ba9626faafc6bd1dccf9f8e353aeb31dd786507?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b781cb98f6d865ef14a831642ba9626faafc6bd1dccf9f8e353aeb31dd786507?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b781cb98f6d865ef14a831642ba9626faafc6bd1dccf9f8e353aeb31dd786507?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b781cb98f6d865ef14a831642ba9626faafc6bd1dccf9f8e353aeb31dd786507?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b781cb98f6d865ef14a831642ba9626faafc6bd1dccf9f8e353aeb31dd786507?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b781cb98f6d865ef14a831642ba9626faafc6bd1dccf9f8e353aeb31dd786507?apiKey=ae699537e68e4693924dac6381c34daf&"
                        className="shrink-0 my-auto w-10 aspect-[1.11]"
                    />
                </div>
                <div className="flex gap-5 justify-between items-end px-7 py-5 mt-10 rounded-3xl bg-zinc-300">
                    <div className="flex flex-col mt-96">
                        <div className="text-2xl text-center text-black">Christina, 20</div>
                        <div className="flex gap-5 justify-between mt-6">
                            <div className="shrink-0 h-1 bg-white rounded-3xl w-[66px]" />
                            <div className="shrink-0 h-1 bg-white rounded-3xl w-[66px]" />
                        </div>
                    </div>
                    <div className="shrink-0 mt-96 h-1 bg-white rounded-3xl w-[66px]" />
                    <div className="flex flex-col self-stretch">
                        <div className="flex flex-col justify-center items-start py-1.5 rounded-3xl bg-stone-300">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3782b909a1d6d20d894b2c50fa04ef6a1186767459d1fd5f652e691c4d7b24d7?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3782b909a1d6d20d894b2c50fa04ef6a1186767459d1fd5f652e691c4d7b24d7?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3782b909a1d6d20d894b2c50fa04ef6a1186767459d1fd5f652e691c4d7b24d7?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3782b909a1d6d20d894b2c50fa04ef6a1186767459d1fd5f652e691c4d7b24d7?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3782b909a1d6d20d894b2c50fa04ef6a1186767459d1fd5f652e691c4d7b24d7?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3782b909a1d6d20d894b2c50fa04ef6a1186767459d1fd5f652e691c4d7b24d7?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3782b909a1d6d20d894b2c50fa04ef6a1186767459d1fd5f652e691c4d7b24d7?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3782b909a1d6d20d894b2c50fa04ef6a1186767459d1fd5f652e691c4d7b24d7?apiKey=ae699537e68e4693924dac6381c34daf&"
                                className="aspect-square w-[30px]"
                            />
                        </div>
                        <div className="shrink-0 mt-96 h-1 bg-white rounded-3xl" />
                    </div>
                </div>
                <div className="self-start mt-7 ml-4 text-xl text-center text-black">
                    score
                </div>
                <div className="self-start mt-7 ml-5 text-xl text-center text-black">
                    balance
                </div>
            </div>
            <div className="flex flex-col px-11 py-3 mt-20 w-full bg-zinc-300">
                <div className="flex gap-5 justify-between items-start">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eb04a6260f7d8c915950edfe155686844b82b6b4b29bdd39c6e946cc39c6c258?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb04a6260f7d8c915950edfe155686844b82b6b4b29bdd39c6e946cc39c6c258?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb04a6260f7d8c915950edfe155686844b82b6b4b29bdd39c6e946cc39c6c258?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb04a6260f7d8c915950edfe155686844b82b6b4b29bdd39c6e946cc39c6c258?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb04a6260f7d8c915950edfe155686844b82b6b4b29bdd39c6e946cc39c6c258?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb04a6260f7d8c915950edfe155686844b82b6b4b29bdd39c6e946cc39c6c258?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb04a6260f7d8c915950edfe155686844b82b6b4b29bdd39c6e946cc39c6c258?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb04a6260f7d8c915950edfe155686844b82b6b4b29bdd39c6e946cc39c6c258?apiKey=ae699537e68e4693924dac6381c34daf&"
                        className="shrink-0 self-stretch my-auto aspect-[1.27] w-[33px]"
                    />
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2856daf6b7ab81ac28463fff2d99fc69993bf13d0dfa5674a2477e1326ee4623?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2856daf6b7ab81ac28463fff2d99fc69993bf13d0dfa5674a2477e1326ee4623?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2856daf6b7ab81ac28463fff2d99fc69993bf13d0dfa5674a2477e1326ee4623?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2856daf6b7ab81ac28463fff2d99fc69993bf13d0dfa5674a2477e1326ee4623?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2856daf6b7ab81ac28463fff2d99fc69993bf13d0dfa5674a2477e1326ee4623?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2856daf6b7ab81ac28463fff2d99fc69993bf13d0dfa5674a2477e1326ee4623?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2856daf6b7ab81ac28463fff2d99fc69993bf13d0dfa5674a2477e1326ee4623?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2856daf6b7ab81ac28463fff2d99fc69993bf13d0dfa5674a2477e1326ee4623?apiKey=ae699537e68e4693924dac6381c34daf&"
                        className="shrink-0 mt-1.5 aspect-[1.12] w-[35px]"
                    />
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cb07b5995a09845b9c31ef1b179439426e9de525d8ef389ed871744f632333e?apiKey=ae699537e68e4693924dac6381c34daf&"
                        className="shrink-0 mt-1.5 w-8 aspect-[1.03]"
                    />
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cd9a7f6ba00f81a7e322e9ce4e4f8cd5231672c23d9ca2ef8dfd12186c6228a?apiKey=ae699537e68e4693924dac6381c34daf&"
                        className="shrink-0 self-stretch w-8 aspect-[0.84]"
                    />
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/67bd076e8a7e53db0996bc3be1ee6fe6e5ad6bdc65958ec4c51954774a08747d?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/67bd076e8a7e53db0996bc3be1ee6fe6e5ad6bdc65958ec4c51954774a08747d?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/67bd076e8a7e53db0996bc3be1ee6fe6e5ad6bdc65958ec4c51954774a08747d?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/67bd076e8a7e53db0996bc3be1ee6fe6e5ad6bdc65958ec4c51954774a08747d?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/67bd076e8a7e53db0996bc3be1ee6fe6e5ad6bdc65958ec4c51954774a08747d?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/67bd076e8a7e53db0996bc3be1ee6fe6e5ad6bdc65958ec4c51954774a08747d?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/67bd076e8a7e53db0996bc3be1ee6fe6e5ad6bdc65958ec4c51954774a08747d?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/67bd076e8a7e53db0996bc3be1ee6fe6e5ad6bdc65958ec4c51954774a08747d?apiKey=ae699537e68e4693924dac6381c34daf&"
                        className="shrink-0 w-8 aspect-[1.03]"
                    />
                </div>
                <div className="shrink-0 self-center mt-6 h-1.5 rounded-3xl bg-neutral-400 w-[187px]" />
            </div>
        </div>
    );
}
