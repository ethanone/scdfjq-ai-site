import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-pattern"></div>
      <div className="container hero-content">
        <h1 className="hero-title">四川东方巨擎工业技术有限公司</h1>
        <p className="hero-subtitle">
          全球水务基础设施数字化与智能化领域的核心赋能者
        </p>
        <p className="hero-description">
          我们专注于为自来水供应、污水处理、雨洪管理及工业水系统提供世界一流的电气自动化控制解决方案与厂务监控管理系统（FMCS）。凭借深厚的技术积累、完整的产业链服务能力和对可持续未来的坚定承诺，东方巨擎正帮助全球公用事业及工业客户实现运营效率、安全性与可靠性的革命性提升。
        </p>
        <a href="#products" className="btn-primary">了解我们的产品</a>
      </div>
    </section>
  )
}

export default Hero
