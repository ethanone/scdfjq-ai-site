import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">企业简介</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="about-content">
          <p className="about-intro">
            四川东方巨擎工业技术有限公司（简称"东方巨擎"或"公司"）是一家植根于中国、服务于全球的高新技术企业。公司总部位于中国西部的经济和创新中心——四川省成都市，致力于成为全球水务基础设施数字化与智能化领域的核心赋能者。
          </p>
          
          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3>技术驱动</h3>
              <p>国家认证的高新技术企业，拥有强大的研发团队</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>质量保证</h3>
              <p>ISO 9001国际认证，严格的质量管理体系</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>全球服务</h3>
              <p>业务覆盖多个地区，提供本地化服务网络</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
