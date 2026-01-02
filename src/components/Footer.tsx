import './Footer.css'

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">东方巨擎</h3>
            <p className="footer-tagline">全球水务基础设施数字化与智能化领域的核心赋能者</p>
            <p className="footer-address">
              总部地址：四川省成都市
            </p>
          </div>
          
          <div className="footer-section">
            <h4>核心产品</h4>
            <ul>
              <li><a href="#products">电气自控解决方案</a></li>
              <li><a href="#products">厂务监控管理系统</a></li>
              <li><a href="#products">系统集成服务</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>关于我们</h4>
            <ul>
              <li><a href="#about">企业简介</a></li>
              <li><a href="#advantages">技术优势</a></li>
              <li><a href="#global">全球业务</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>联系我们</h4>
            <ul>
              <li>地址：四川省成都市</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 四川东方巨擎工业技术有限公司 保留所有权利</p>
          <div className="footer-links">
            <a href="#">隐私政策</a>
            <span>|</span>
            <a href="#">使用条款</a>
            <span>|</span>
            <a href="#">网站地图</a>
          </div>
        </div>
      </div>
      
      <button className="help-button" aria-label="需要帮助？">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span>需要帮助？</span>
      </button>
    </footer>
  )
}

export default Footer
