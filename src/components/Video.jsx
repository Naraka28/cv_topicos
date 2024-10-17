/* eslint-disable react/no-unknown-property */
import { Title } from "./Title";
export function Video() {
  return (
   
      <div className="flex flex-col md:flex-row justify-center my-20 ">
        <div className="w-full md:w-7/12">
            <Title>Videocurrículum</Title>
            <iframe
            className="w-full h-96 lg:w-96 lg:h-96 lg:mx-auto"
            src="https://www.youtube.com/embed/7tllUDX0jMo?si=GMZZaAnCORxhckDJ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            >
            </iframe>
        </div>

        </div>
  );
}
