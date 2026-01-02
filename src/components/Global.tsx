import './Global.css'

const Global = () => {
  return (
    <section id="global" className="global">
      <div className="container">
        <div className="global-content">
          <div className="global-text">
            <div className="section-header section-header-left">
              <h2 className="section-title">全球业务与本地化服务</h2>
              <div className="section-divider"></div>
            </div>
            
            <p className="global-description">
              东方巨擎秉持"根植中国，服务全球"的理念。我们的业务已从中国本土扩展至海外，在东南亚、南亚、中东、非洲等多个地区的水务项目中积累了成功的实践经验。
            </p>
            
            <p className="global-description">
              我们理解不同市场的独特需求与标准差异。因此，公司致力于构建本地化的服务网络，提供包括英语、俄语、西班牙语等多语言技术支持，确保与全球客户的无障碍沟通与高效协作。
            </p>
          </div>
        </div>
        
        <div className="mission-section">
          <div className="mission-card">
            <h2 className="mission-title">我们的使命</h2>
            <p className="mission-text">
              以创新技术和可靠解决方案，赋能全球水务行业，共同应对水资源挑战，守护蓝色星球，为社区和环境创造长期价值。
            </p>
            <p className="mission-callout">
              欢迎全球合作伙伴垂询，携手构建更智能、更高效、更可持续的水未来。
            </p>
            <a href="#contact" className="btn-secondary">联系我们</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Global
