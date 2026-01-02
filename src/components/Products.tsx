import './Products.css'

const Products = () => {
  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">核心产品与服务</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            东方巨擎提供从顶层设计到现场调试的全生命周期服务
          </p>
        </div>
        
        <div className="products-grid">
          <div className="product-card">
            <div className="product-number">01</div>
            <h3 className="product-title">全流程水系统电气自控解决方案</h3>
            <p className="product-description">
              我们为水厂、泵站及管网提供定制化的自动化控制系统，核心是基于可编程逻辑控制器（PLC）的数据采集与监控系统（SCADA）。
            </p>
            <ul className="product-features">
              <li>
                <strong>监控范围：</strong>涵盖取水、加药、沉淀、过滤、生物处理、消毒、输配水等全工艺环节
              </li>
              <li>
                <strong>控制对象：</strong>包括水泵、风机、阀门、格栅、搅拌器、加药设备等关键设备
              </li>
              <li>
                <strong>数据监测：</strong>实时监测流量、压力、液位、水质（如pH值、浊度、污泥浓度）、能耗等关键参数
              </li>
              <li>
                <strong>控制模式：</strong>支持中央控制室远程控制、现场控制站控制及设备就地控制的多级控制模式
              </li>
            </ul>
          </div>
          
          <div className="product-card">
            <div className="product-number">02</div>
            <h3 className="product-title">先进的厂务监控管理系统（FMCS）</h3>
            <p className="product-description">
              我们的FMCS超越传统的SCADA系统，是一个集成设备监控、能源管理、数据分析与预测性维护的智能平台。
            </p>
            <ul className="product-features">
              <li>
                <strong>智能优化控制：</strong>通过算法模型，对水系统进行智能调度与优化，平衡管网压力、预测水质变化并自动调节工艺参数
              </li>
              <li>
                <strong>全厂能源管理：</strong>监测统计全厂水、电、气等能源消耗，通过数据分析识别节能潜力
              </li>
              <li>
                <strong>预测性维护与数字孪生：</strong>利用物联网和数据分析技术，对设备运行状态进行实时评估与故障预警，变"被动维修"为"主动维护"
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
