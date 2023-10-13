import React from "react";
import styles from "./styles.module.scss";

const PlayVideo = () => {
  return (
    <div>
      <iframe
        src="https://rr5---sn-npoldn76.googlevideo.com/videoplayback?expire=1697207933&ei=HQIpZaKBBY6wp-oP0ciZkA0&ip=140.238.87.9&id=o-ABB5jttaXruLUBHiA6xa3vYUsm5MEUTW7mksPsLNS0xM&itag=137&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&gir=yes&clen=176449172&dur=697.366&lmt=1697095835572638&keepalive=yes&fexp=24007246,24350018&beids=24350018&c=ANDROID_TV&txp=5502434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AGM4YrMwRQIhAKwip-xsiPkLD5igG8je0rA31O5BkD8gSz6YQZVNlmhPAiBShNJrHgMWSaygPdNsQzFkcubYbiJtesG2-KlVv4abWQ%3D%3D&rm=sn-5hnezs7l&req_id=a90ca8073eefa3ee&cm2rm=sn-gwpa-5hqee7e,sn-gwpa-cvhe77z,sn-cvhsk7s&ipbypass=yes&redirect_counter=4&cms_redirect=yes&cmsv=e&mh=d5&mip=2405:201:2011:68fc:6d16:8bc5:f431:af6c&mm=34&mn=sn-npoldn76&ms=ltu&mt=1697186220&mv=m&mvi=5&pl=48&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AK1ks_kwRQIgaTJ_BjKbYI-PPu9Nl2F7Q4y9ESrNZmrxXKa6BAsNcVoCIQCY8txIejHSe87Or9576DgtgGRbijrO7nE16MziP1Yc8Q%3D%3D"
        frameborder="0"
        title="video"
        width={"693px"}
        height={"390px"}
        onPlay={true}
      />
      <h2>
        How to Create a Pro Level Blog Website Using: HTML, CSS and JavaScript
      </h2>
      <div className={styles.creatorInfo}>
        <figure>
          <img
            src="https://yt3.ggpht.com/LUxaZate0zutzKHSZUncQ9KGpqCYEH4w5ltj8DLgAjf76HDgCJtx4MZ6zKQms-hDobwAhlT1Mg=s88-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </figure>
        <div className={styles.subsInfo}>
          <h6>Coding Web Studio</h6>
          <p>197 subs</p>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
