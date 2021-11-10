import React from "react";
import { BottomAnchorPopUp } from "..";

export function HomeFooter() {
  


  return (
   
  
    <div className="home-footer">
      <ul className="home-footer-list">
        <div className="home-footer-list-upper">
          <li><a href="https://twitter.com/en/tos" target="_blank">Terms of Service</a></li>
          <li><a href="https://twitter.com/en/privacy" target="_blank">Privacy Policy</a></li>
          <li><a href="https://help.twitter.com/tr/rules-and-policies/twitter-cookies" target="_blank">Cookie Policy</a></li>
        </div>
        <div className="home-footer-list-bottom">
          <li><a href="https://legal.twitter.com/tr/imprint" target="_blank">Imprint</a></li>
          <li><a href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo" target="_blank">Ads info</a></li>
          <li><a target="_blank">More ...</a></li>
          <li><span className="home-footer-span">© 2021 Twitter, Inc.</span></li>
        </div>
      </ul>
    </div>
    
  );
}
