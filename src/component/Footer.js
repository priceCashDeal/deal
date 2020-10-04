import React from 'react'
import "./Footer.css";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__row">
                <a href="https://t.me/pricecrashdeals" target="_blank">
                    <div className="icon">
                        <TelegramIcon className="icons" />
                    </div>
                </a>
                <a href="https://wa.me/message/ZMLGQNUVKTOGH1" target="_blank">
                    <div className="icon">
                        <WhatsAppIcon className="icons" />
                    </div>
                </a>
                <a href="https://www.youtube.com/channel/UCgdt9rntkl80DKd3T_EvVNw" target="_blank">
                    <div className="icon">
                        <YouTubeIcon className="icons" />
                    </div>
                </a>
                <a href="https://twitter.com/pricecrashdeals" target="_blank">
                    <div className="icon">
                        <TwitterIcon className="icons" />
                    </div>
                </a>
            </div>
            <div className="copy__right">
                <p>Copyright <span>&#169;</span> 2020 Price Crash Deals All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
