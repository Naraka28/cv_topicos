/* eslint-disable react/no-unknown-property */
import { Title } from "./Title";
export function Video() {
  return (
    <div className="flex flex-col md:flex-row justify-center mb-16 ">
      <div className="">
        <Title>Videocurrículum</Title>
        <iframe
          className="justify-center"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7tllUDX0jMo?si=GMZZaAnCORxhckDJ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
