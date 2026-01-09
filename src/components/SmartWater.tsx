import './SmartWater.css'

const SmartWater = () => {
  return (
    <section id="smart-water" className="smart-water">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">智慧水务解决方案</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            运用"物联网+移动化+智能化"先进技术，构建新一代污水厂生产运营管理整体架构
          </p>
        </div>

        {/* 功能概述 */}
        <div className="overview-section">
          <div className="overview-card">
            <h3>功能概述</h3>
            <p>
              采用系统思维构建新一代污水厂生产运营管理的整体逻辑架构，实现污水厂智慧化建设目标。
              项目立足于"规范化管理、移动化作业运营、完善资产全生命周期档案、数据挖掘分析、科学化决策、
              人员减负荷、生产降耗、运管工作增效"的建设目标。
            </p>
          </div>
          <div className="overview-card">
            <h3>项目目标</h3>
            <p>
              通过智慧污水厂运营管理平台的建设，实现生产环节及人员作业过程全面的信息感知，
              实现生产运行、远程监控、事务处理、决策等业务过程向数字化、信息化、智慧化模式迈进，
              进一步提高污水厂精细化管理水平，提高生产人员工作效率。
            </p>
          </div>
        </div>

        {/* 总体架构 */}
        <div className="architecture-section">
          <h3 className="subsection-title">总体架构</h3>
          <p className="architecture-intro">
            智慧污水厂的技术架构分为<strong>设备层、通讯层、数据层、平台层、用户层</strong>五层架构。
          </p>
          <div className="architecture-layers">
            <div className="layer-item">
              <div className="layer-number">1</div>
              <h4>设备层</h4>
              <p>实现各个工艺单体PLC控制站等基础数据的采集</p>
            </div>
            <div className="layer-item">
              <div className="layer-number">2</div>
              <h4>通讯层</h4>
              <p>通过工业通讯设备实现数据的传输与交互</p>
            </div>
            <div className="layer-item">
              <div className="layer-number">3</div>
              <h4>数据层</h4>
              <p>实现对底层数据的采集与存储，压缩存储至实时历史数据库</p>
            </div>
            <div className="layer-item">
              <div className="layer-number">4</div>
              <h4>平台层</h4>
              <p>实现信息系统集成管理、生产运营管理、设备管理、水质管理等综合功能</p>
            </div>
            <div className="layer-item">
              <div className="layer-number">5</div>
              <h4>用户层</h4>
              <p>支持PC、移动端等多种终端访问，打破地域限制，实现跨平台作业</p>
            </div>
          </div>
        </div>

        {/* 核心功能模块 */}
        <div className="features-section">
          <h3 className="subsection-title">核心功能模块</h3>
          
          {/* 平台配置管理 */}
          <div className="feature-module">
            <h4 className="module-title">
              <span className="module-icon">⚙️</span>
              平台配置管理
            </h4>
            <div className="feature-grid">
              <div className="feature-item">
                <h5>基础配置</h5>
                <p>组织管理、用户管理、权限管理、区域位置、菜单管理、模板管理、工作流管理等</p>
              </div>
              <div className="feature-item">
                <h5>消息公告</h5>
                <p>定期发布企业生产运营信息、企业通知、宣介材料，实现精准传递</p>
              </div>
              <div className="feature-item">
                <h5>用户设置</h5>
                <p>用户信息配置、系统个性化设置、菜单布局、主题皮肤、消息推送等</p>
              </div>
              <div className="feature-item">
                <h5>关注列表</h5>
                <p>用户自定义关注内容，便捷查看设备台帐、巡检任务、维修工单等</p>
              </div>
              <div className="feature-item">
                <h5>消息中心</h5>
                <p>统一管理任务、关注项、报警等信息，及时接收和处理</p>
              </div>
              <div className="feature-item">
                <h5>任务看板</h5>
                <p>统一管理巡检、维修、保养等各类任务，实现快速响应和高效执行</p>
              </div>
            </div>
          </div>

          {/* 生产管理 */}
          <div className="feature-module">
            <h4 className="module-title">
              <span className="module-icon">📊</span>
              生产管理
            </h4>
            
            <div className="sub-module">
              <h5 className="sub-module-title">运行监管</h5>
              <div className="feature-list">
                <div className="feature-detail">
                  <span className="feature-number">1</span>
                  <div>
                    <strong>运行监管一张图</strong>
                    <p>直观展示进水、出水工艺数据，提高污水厂管理水平，支持风格统一、交互友好的数据信息看板</p>
                  </div>
                </div>
                <div className="feature-detail">
                  <span className="feature-number">2</span>
                  <div>
                    <strong>生产过程可视化</strong>
                    <p>构建厂区光纤单环网，统一整合视频监控、生产工艺、中控管理、数据分析应用及厂外管网等多元数据</p>
                  </div>
                </div>
                <div className="feature-detail">
                  <span className="feature-number">3</span>
                  <div>
                    <strong>生产水质数据分析图</strong>
                    <p>分析出厂水、原水、过程水的水质、水量、压力、药耗、电耗等关键指标，支持多种图表形式展示</p>
                  </div>
                </div>
                <div className="feature-detail">
                  <span className="feature-number">4</span>
                  <div>
                    <strong>生产运行分析图</strong>
                    <p>记录生物滤池冲洗、刮泥机运行、加药系统切换、进水泵房和尾水泵房机组运行等工艺运行状况</p>
                  </div>
                </div>
                <div className="feature-detail">
                  <span className="feature-number">5</span>
                  <div>
                    <strong>设备及其运维分析图</strong>
                    <p>监控设备数量、故障统计、完好率分析、使用率分析、维修任务完成情况、关键设备维保情况</p>
                  </div>
                </div>
                <div className="feature-detail">
                  <span className="feature-number">6</span>
                  <div>
                    <strong>运维台时分析图</strong>
                    <p>实时统计现场设备运行时间，为厂区调度提供数据基础</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sub-module">
              <h5 className="sub-module-title">工艺运行管理</h5>
              <div className="feature-list">
                <div className="feature-detail">
                  <span className="feature-number">1</span>
                  <div>
                    <strong>生产水质数据分析</strong>
                    <p>在线监测COD、PH、氨氮、总磷、总氮、SS等参数，支持多种图表展示和多维度数据分析</p>
                  </div>
                </div>
                <div className="feature-detail">
                  <span className="feature-number">2</span>
                  <div>
                    <strong>工艺单体运行分析</strong>
                    <p>对各工艺段进行数据采集及分析，实现跨时段、跨工艺的数据对比</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sub-module">
              <h5 className="sub-module-title">运行优化分析</h5>
              <div className="feature-list">
                <div className="feature-detail">
                  <span className="feature-number">1</span>
                  <div>
                    <strong>水质水量管理</strong>
                    <p>根据处理能力、能耗成本、药耗成本等信息进行分析，实现节能降耗</p>
                  </div>
                </div>
                <div className="feature-detail">
                  <span className="feature-number">2</span>
                  <div>
                    <strong>设备运行分析</strong>
                    <p>统计设备运行状态（正常运行、未运行、故障、异常、保养）及综合效率，进行状态持续时间、发生次数和原因分析</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sub-module">
              <h5 className="sub-module-title">辅助决策支持</h5>
              <div className="feature-list">
                <div className="feature-detail">
                  <span className="feature-number">1</span>
                  <div>
                    <strong>运营成本分析</strong>
                    <p>统计和分析人工成本、运营成本、折旧损耗成本，实时展示各时间段成本情况，辅助管理者及时调控</p>
                  </div>
                </div>
                <div className="feature-detail">
                  <span className="feature-number">2</span>
                  <div>
                    <strong>辅助诊断</strong>
                    <p>
                      <strong>事前诊断：</strong>监控分析工艺或设备运行数据，提前诊断风险点<br/>
                      <strong>事后分析：</strong>查找问题原因，提供处置方案，包括诊断规则、诊断记录、故障库、推荐记录
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 水质量管理 */}
          <div className="feature-module">
            <h4 className="module-title">
              <span className="module-icon">💧</span>
              水质量管理
            </h4>
            <p className="module-description">
              用于水质监管，保证数据的实用性、真实性、完整性及可分析性。系统提供水质数据填报、审核、
              水质报表（日报、月报等）、水质分析、水质预警管理等功能。
            </p>
          </div>

          {/* 设备管理 */}
          <div className="feature-module">
            <h4 className="module-title">
              <span className="module-icon">🔧</span>
              设备管理
            </h4>
            <p className="module-description">
              建立统一台账，实现设备资产在线实时监控及维修、保养、巡检等高价值功能。
              综合展示设备状态信息（运行数量、停机数量、故障数量、维修数量等），
              支持查看设备详情，包括运行数据、设备档案、设备位置、报警情况等。
            </p>
          </div>

          {/* 药剂管理 */}
          <div className="feature-module">
            <h4 className="module-title">
              <span className="module-icon">🧪</span>
              药剂管理
            </h4>
            <div className="sub-module">
              <h5 className="sub-module-title">药剂仓库管理</h5>
              <div className="feature-grid">
                <div className="feature-item">
                  <h5>库存查询</h5>
                  <p>将药剂的购、存、用环节串联，压缩成本开支，支持存货预测、分类与跟踪</p>
                </div>
                <div className="feature-item">
                  <h5>入库管理</h5>
                  <p>录入药剂类型、厂家、数量、存放位置等信息，支持条码记录和检索查询</p>
                </div>
                <div className="feature-item">
                  <h5>出库管理</h5>
                  <p>记录出库信息，支持查询、编辑、删除、打印等数据处理功能</p>
                </div>
                <div className="feature-item">
                  <h5>盘点管理</h5>
                  <p>管理历史盘点数据及实盘数据，支持审核、追溯、编辑等操作</p>
                </div>
                <div className="feature-item">
                  <h5>档案管理</h5>
                  <p>录入药剂信息、供应商信息档案，形成体系化管理模式</p>
                </div>
              </div>
            </div>
            <div className="sub-module">
              <h5 className="sub-module-title">药剂化验管理</h5>
              <p>对药剂不合格现象进行前期定义，快速录入来料化验结果，进行分类汇总和统计分析</p>
            </div>
            <div className="sub-module">
              <h5 className="sub-module-title">药剂用量管理</h5>
              <p>依托各时段药剂用量和出水情况，进行吨水药剂用量分析，提高药剂使用率</p>
            </div>
          </div>

          {/* 视频、安防管理 */}
          <div className="feature-module">
            <h4 className="module-title">
              <span className="module-icon">📹</span>
              视频、安防管理
            </h4>
            <p className="module-description">
              在主要工艺段、重要机房部署前端网络型摄像机，实现实时监控和记录。
              与报警系统联动，变被动为主动防御，大幅提高异常响应速度。
            </p>
            <div className="feature-grid">
              <div className="feature-item">
                <h5>人员管理</h5>
                <p>通过门禁系统实现人员管理功能</p>
              </div>
              <div className="feature-item">
                <h5>值班室管理</h5>
                <p>24小时值班制度管理，来访人员登记上传至管理平台</p>
              </div>
              <div className="feature-item">
                <h5>巡检管理</h5>
                <p>制定巡检计划、路线，派发工单，支持手机APP巡检，确保按流程检查</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SmartWater