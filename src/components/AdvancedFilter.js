import { useState, useEffect } from "react";
 
const AdvancedFilter = () => {
    return (
        <div className="AdvancedFilter">
            <div className="SearchFilter">
                <p className="FilterTitle">Websites to search</p>
                <ul className="WebsitesList">
                    <li className="WebsitesItem">
                        <i className="fa-brands fa-facebook"></i>
                        <p>Facebook</p>
                    </li>
                    <li className="WebsitesItem">
                        <i className="fa-brands fa-instagram"></i>
                        <p>Instagram</p>
                    </li>
                    <li className="WebsitesItem">
                        <i className="fa-brands fa-twitter"></i>
                        <p>Twitter</p>
                    </li>
                    <li className="WebsitesItem">
                        <i className="fa-brands fa-linkedin"></i>
                        <p>Linkedin</p>
                    </li>
                    <li className="WebsitesItem">
                        <i className="fa-brands fa-reddit"></i>
                        <p>Reddit</p>
                    </li>
                </ul>
            </div>
            <div className="SearchFilter">
                <p className="FilterTitle">Date Published</p>
                <ul className="WebsitesList">
                    <li className="WebsitesItem">
                        <i className="fa-brands fa-facebook"></i>
                        <p>Facebook</p>
                    </li>
                    <li className="WebsitesItem">
                        <i className="fa-brands fa-instagram"></i>
                        <p>Instagram</p>
                    </li>
                    <li className="WebsitesItem">
                        <i className="fa-brands fa-twitter"></i>
                        <p>Twitter</p>
                    </li>
                    <li className="WebsitesItem">
                        <i className="fa-brands fa-linkedin"></i>
                        <p>Linkedin</p>
                    </li>
                    <li className="WebsitesItem">
                        <i className="fa-brands fa-reddit"></i>
                        <p>Reddit</p>
                    </li>
                </ul>
            </div>
            <div className="SearchFilter">
                <p className="FilterTitle">File Format</p>
                <ul className="WebsitesList">
                    <li className="WebsitesItem">
                        <i className="fa-brands fa-facebook"></i>
                        <p>Facebook</p>
                    </li>
                    <li className="WebsitesItem">
                        <i className="fa-brands fa-instagram"></i>
                        <p>Instagram</p>
                    </li>
                    <li className="WebsitesItem">
                        <i className="fa-brands fa-twitter"></i>
                        <p>Twitter</p>
                    </li>
                    <li className="WebsitesItem">
                        <i className="fa-brands fa-linkedin"></i>
                        <p>Linkedin</p>
                    </li>
                    <li className="WebsitesItem">
                        <i className="fa-brands fa-reddit"></i>
                        <p>Reddit</p>
                    </li>
                </ul>
            </div>    
        </div>
    );
};

export default AdvancedFilter;