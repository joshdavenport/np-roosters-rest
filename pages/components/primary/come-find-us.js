import Image from 'next/image';

export default function ComeFindUs() {
  return (
    <div className="come-find-us">
      <h2 className="come-find-us__title">Come Find Us</h2>
      <Image src="/images/photo-exterior.jpg" width="878" height="505" className="come-find-us__image" />
      <div className="come-find-us__address">W. Eclipse Blvd, Vinewood, Los Santos</div>
    </div>
  );
}
