import React from 'react';
import "./WebsitePolicies.css"

const WebsitePolicies = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <div className="policy-container">
        <h1>Website Policies</h1>
        
        <section style={{ marginBottom: '20px' }}>
          <h2>Copyright Policy</h2>
          <p>
            Material on this website may be reproduced free of charge with proper permission. To obtain permission, please contact us via email. All reproduced material must be accurate and must not be used in a derogatory or misleading context. The source must be prominently acknowledged whenever the material is published or issued to others. Permission to reproduce material does not extend to any third-party content identified on this website. Authorization to reproduce such material must be obtained from the respective copyright holders. These terms and conditions are governed by Indian law, and any disputes arising under them shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
          </p>
        </section>
        
        <section style={{ marginBottom: '20px' }}>
          <h2>Hyperlinking Policy</h2>
          <h3>Links to External Websites</h3>
          <p>
            This website may contain links to other websites, portals, web applications, or mobile apps for your convenience. We are not responsible for the content of these external sites, nor do we endorse their views. We cannot guarantee the functionality of these links at all times and have no control over the availability of the linked destinations.
          </p>
          <h3>Links to This Website by Other Websites</h3>
          <p>
            We allow direct links to the information hosted on our website without prior permission. However, we request that you inform us about any links provided to this website so we can notify you of any updates or changes. Our pages must not be loaded into frames on other sites; they must open in a new browser window.
          </p>
        </section>
        
        <section style={{ marginBottom: '20px' }}>
          <h2>Privacy Policy</h2>
          <p>
            We do not automatically capture any personal information (such as name, phone number, or email address) that allows us to identify you individually. If you choose to provide personal information, we use it solely to fulfill your request for information. To avail of online services offered through this website, user registration is required. Information collected is used to facilitate interaction with our services. We do not sell or share personally identifiable information with third parties. Any information provided will be protected against unauthorized access, loss, misuse, or disclosure. We gather certain information, such as your IP address, domain name, browser type, and the date and time of your visit. This information is not linked to your identity unless an attempt to damage the site is detected.
          </p>
        </section>
        
        <section style={{ marginBottom: '20px' }}>
          <h2>Security Policy</h2>
          <p>
            To ensure the security of our services, we monitor network traffic to identify unauthorized attempts to upload or change information or otherwise cause damage. Except for authorized law enforcement investigations, no attempts are made to identify individual users or their usage habits. Raw data logs are used solely for security purposes and are regularly deleted. Unauthorized attempts to alter information or upload content to this service are strictly prohibited and may be punishable under the Indian IT Act (2000).
          </p>
        </section>
      </div>
    </div>
  );
};

export default WebsitePolicies;
