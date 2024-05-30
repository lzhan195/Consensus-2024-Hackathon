import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col px-20 py-20 mx-auto w-full text-base text-center bg-white rounded-3xl max-w-[480px] text-neutral-400">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f99c70613f1d6905d41ea6f890ec3d00967bbf2fbbd0102abe691261b7309cd7?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f99c70613f1d6905d41ea6f890ec3d00967bbf2fbbd0102abe691261b7309cd7?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f99c70613f1d6905d41ea6f890ec3d00967bbf2fbbd0102abe691261b7309cd7?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f99c70613f1d6905d41ea6f890ec3d00967bbf2fbbd0102abe691261b7309cd7?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f99c70613f1d6905d41ea6f890ec3d00967bbf2fbbd0102abe691261b7309cd7?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f99c70613f1d6905d41ea6f890ec3d00967bbf2fbbd0102abe691261b7309cd7?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f99c70613f1d6905d41ea6f890ec3d00967bbf2fbbd0102abe691261b7309cd7?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f99c70613f1d6905d41ea6f890ec3d00967bbf2fbbd0102abe691261b7309cd7?apiKey=ae699537e68e4693924dac6381c34daf&"
        className="self-center mt-28 aspect-square w-[50px]"
      />
      <div className="self-center mt-6 text-5xl text-black">Login</div>
      <div className="flex gap-2.5 px-5 py-4 mt-16 bg-zinc-300 rounded-[30px]">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/95b06709e3e7581bcba449b569297410ebf8efaf8ad4c9c2947ff4af9935dcab?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b06709e3e7581bcba449b569297410ebf8efaf8ad4c9c2947ff4af9935dcab?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b06709e3e7581bcba449b569297410ebf8efaf8ad4c9c2947ff4af9935dcab?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b06709e3e7581bcba449b569297410ebf8efaf8ad4c9c2947ff4af9935dcab?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b06709e3e7581bcba449b569297410ebf8efaf8ad4c9c2947ff4af9935dcab?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b06709e3e7581bcba449b569297410ebf8efaf8ad4c9c2947ff4af9935dcab?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b06709e3e7581bcba449b569297410ebf8efaf8ad4c9c2947ff4af9935dcab?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/95b06709e3e7581bcba449b569297410ebf8efaf8ad4c9c2947ff4af9935dcab?apiKey=ae699537e68e4693924dac6381c34daf&"
          className="shrink-0 aspect-[0.83] w-[25px]"
        />
        <div className="flex-auto my-auto">Name </div>
      </div>
      <div className="flex gap-3.5 p-5 mt-8 whitespace-nowrap bg-zinc-300 rounded-[30px]">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/76217d0f07b835c79a2f784e9cd3981bb8e06abd9ab4b2326e3d4687cac888a3?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/76217d0f07b835c79a2f784e9cd3981bb8e06abd9ab4b2326e3d4687cac888a3?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76217d0f07b835c79a2f784e9cd3981bb8e06abd9ab4b2326e3d4687cac888a3?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/76217d0f07b835c79a2f784e9cd3981bb8e06abd9ab4b2326e3d4687cac888a3?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/76217d0f07b835c79a2f784e9cd3981bb8e06abd9ab4b2326e3d4687cac888a3?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76217d0f07b835c79a2f784e9cd3981bb8e06abd9ab4b2326e3d4687cac888a3?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/76217d0f07b835c79a2f784e9cd3981bb8e06abd9ab4b2326e3d4687cac888a3?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/76217d0f07b835c79a2f784e9cd3981bb8e06abd9ab4b2326e3d4687cac888a3?apiKey=ae699537e68e4693924dac6381c34daf&"
          className="shrink-0 aspect-[0.92] w-[23px]"
        />
        <div className="flex-auto my-auto">Email</div>
      </div>
      <div className="flex flex-col justify-center py-1 mt-9 w-full whitespace-nowrap bg-zinc-300 rounded-[30px]">
        <div className="flex z-10 gap-2 items-start px-2.5 pt-2.5 pb-5 mb-0 bg-zinc-300 rounded-[30px]">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/df8fca6e0a2efbc6ff52bd03b5144bf0168402da507f365e48ce4c2b5bad03ab?apiKey=ae699537e68e4693924dac6381c34daf&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/df8fca6e0a2efbc6ff52bd03b5144bf0168402da507f365e48ce4c2b5bad03ab?apiKey=ae699537e68e4693924dac6381c34daf&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df8fca6e0a2efbc6ff52bd03b5144bf0168402da507f365e48ce4c2b5bad03ab?apiKey=ae699537e68e4693924dac6381c34daf&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/df8fca6e0a2efbc6ff52bd03b5144bf0168402da507f365e48ce4c2b5bad03ab?apiKey=ae699537e68e4693924dac6381c34daf&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/df8fca6e0a2efbc6ff52bd03b5144bf0168402da507f365e48ce4c2b5bad03ab?apiKey=ae699537e68e4693924dac6381c34daf&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df8fca6e0a2efbc6ff52bd03b5144bf0168402da507f365e48ce4c2b5bad03ab?apiKey=ae699537e68e4693924dac6381c34daf&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/df8fca6e0a2efbc6ff52bd03b5144bf0168402da507f365e48ce4c2b5bad03ab?apiKey=ae699537e68e4693924dac6381c34daf&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/df8fca6e0a2efbc6ff52bd03b5144bf0168402da507f365e48ce4c2b5bad03ab?apiKey=ae699537e68e4693924dac6381c34daf&"
            className="shrink-0 self-start aspect-square w-[31px]"
          />
          <div className="flex-auto my-auto">Password</div>
        </div>
      </div>
      <div className="justify-center items-center px-16 py-3.5 mt-10 text-white bg-black rounded-[30px]">
        Sign Up
      </div>
      <div className="self-center mt-6 text-sm font-bold text-indigo-600">
        Forgot Password?
      </div>
    </div>
  );
}
