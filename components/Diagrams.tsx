
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Building2, Sun, Users, ShieldCheck, BarChart3, TrendingUp, AlertTriangle, Hammer, Briefcase, Globe, Layers, Smartphone, LayoutGrid, Zap, PaintBucket, Shovel, TreePine, TrafficCone, Umbrella, Warehouse, Flower, Cpu, Wind, Plane, Landmark, Lightbulb } from 'lucide-react';

// --- MACRO DATA TABLE (NEW) ---
export const MacroDataTable: React.FC = () => {
    const data = [
        { year: "2021", output: "29.31", outputGrowth: "11.04%", companies: "12.88", compGrowth: "11.55%", contracts: "34.58 (估算)", contractGrowth: "约6.0%" },
        { year: "2022", output: "31.20", outputGrowth: "6.45%", companies: "14.36", compGrowth: "11.55%", contracts: "36.65", contractGrowth: "6.36%" },
        { year: "2023", output: "31.59", outputGrowth: "5.77%", companies: "15.79", compGrowth: "10.51%", contracts: "35.60", contractGrowth: "-2.85%" },
        { year: "2024", output: "32.65 (预计)", outputGrowth: "3.85%", companies: "16.80", compGrowth: "5.57%", contracts: "33.75", contractGrowth: "-5.29%" },
    ];

    return (
        <div className="my-8 overflow-hidden border border-gray-200 rounded-lg shadow-sm">
            <div className="bg-gray-50 p-4 border-b border-gray-200">
                <h4 className="font-bold text-const-dark text-sm">2021-2024年建筑业宏观数据一览</h4>
                <p className="text-xs text-gray-500 mt-1">数据来源：综合中国建筑业协会、国家统计局年度统计公报及行业报告</p>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                    <thead className="bg-const-concrete text-const-dark font-bold text-xs uppercase">
                        <tr>
                            <th className="px-4 py-3">年度</th>
                            <th className="px-4 py-3">总产值 (万亿)</th>
                            <th className="px-4 py-3 text-gray-500">同比</th>
                            <th className="px-4 py-3">企业数量 (万个)</th>
                            <th className="px-4 py-3 text-gray-500">同比</th>
                            <th className="px-4 py-3">新签合同 (万亿)</th>
                            <th className="px-4 py-3 text-gray-500">同比</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {data.map((row, idx) => (
                            <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 font-bold text-const-blue">{row.year}</td>
                                <td className="px-4 py-3 font-medium">{row.output}</td>
                                <td className="px-4 py-3 text-gray-500 text-xs">{row.outputGrowth}</td>
                                <td className="px-4 py-3 font-medium">{row.companies}</td>
                                <td className="px-4 py-3 text-gray-500 text-xs">{row.compGrowth}</td>
                                <td className="px-4 py-3 font-medium">{row.contracts}</td>
                                <td className={`px-4 py-3 text-xs font-bold ${row.contractGrowth.includes('-') ? 'text-red-500' : 'text-green-600'}`}>
                                    {row.contractGrowth}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// --- PESTEL ANALYSIS GRID (STATIC) ---
export const PestelGrid: React.FC = () => {
    const items = [
        { title: "Political (政策)", desc: "扶持与规范并举。政府采购倾斜中小企业（40%份额预留），专项资金支持'专精特新'，税收优惠减免。", color: "border-l-const-blue" },
        { title: "Economic (经济)", desc: "增速换挡，结构分化。GDP增速回落至5%区间，房地产投资负增长，基建与制造业投资成为新托底。", color: "border-l-red-500" },
        { title: "Social (社会)", desc: "人口老龄化导致'招工难、用工贵'。城镇化进入下半场，关注适老化改造与城市功能提升。", color: "border-l-yellow-500" },
        { title: "Technological (技术)", desc: "BIM、AI、建筑机器人从头部企业普及至全行业。数字化成为降本增效的'必需品'。", color: "border-l-indigo-500" },
        { title: "Environmental (环境)", desc: "'双碳'目标倒逼。绿色建筑、装配式建筑成为硬指标。碳交易市场逐步覆盖建筑业。", color: "border-l-green-500" },
        { title: "Legal (法律)", desc: "合规性要求空前严格。资质改革淡化企业强化个人，农民工实名制，终身责任制。", color: "border-l-gray-500" },
    ];

    return (
        <div className="my-8">
            <h4 className="text-sm font-bold text-const-steel uppercase tracking-widest mb-4">宏观环境 PESTEL 模型分析</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item, i) => (
                    <div key={i} className={`bg-gray-50 p-4 rounded shadow-sm border border-gray-100 ${item.color} border-l-4`}>
                        <h4 className="font-bold text-const-dark mb-2 text-sm">{item.title}</h4>
                        <p className="text-xs text-const-steel leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

// --- QUALIFICATION PYRAMID (NEW) ---
export const QualificationPyramid: React.FC = () => {
    return (
        <div className="my-8 flex flex-col items-center justify-center">
            <h4 className="text-sm font-bold text-const-steel uppercase tracking-widest mb-6">中国建筑业企业资质等级分布金字塔</h4>
            
            <div className="relative w-full max-w-md flex flex-col items-center gap-1">
                {/* Level 1: Apex */}
                <div className="w-1/4 h-16 bg-const-blue text-white flex flex-col justify-center items-center rounded-t-lg shadow-md relative z-40 transform hover:scale-105 transition-transform">
                    <span className="font-bold text-xs">&lt;1%</span>
                    <span className="text-[10px] opacity-80">特级/综合资质</span>
                </div>
                
                {/* Level 2 */}
                <div className="w-1/2 h-16 bg-blue-400 text-white flex flex-col justify-center items-center shadow-md relative z-30 transform hover:scale-105 transition-transform">
                    <span className="font-bold text-xs">~10%</span>
                    <span className="text-[10px] opacity-90">一级资质 (区域骨干)</span>
                </div>

                {/* Level 3 */}
                <div className="w-3/4 h-16 bg-blue-300 text-const-dark flex flex-col justify-center items-center shadow-md relative z-20 transform hover:scale-105 transition-transform">
                    <span className="font-bold text-xs">~30%</span>
                    <span className="text-[10px] font-medium opacity-80">二级资质 (市场主力)</span>
                </div>

                {/* Level 4: Base */}
                <div className="w-full h-20 bg-gray-200 text-const-steel flex flex-col justify-center items-center rounded-b-lg shadow-md relative z-10 transform hover:scale-105 transition-transform border-t border-white/20">
                    <span className="font-bold text-lg">~60%</span>
                    <span className="text-xs font-bold">三级及以下资质</span>
                    <span className="text-[10px] mt-1">(小微企业 / 劳务分包)</span>
                </div>

                {/* Annotation Lines (Decorative) */}
                <div className="absolute top-4 -right-4 md:-right-12 text-[10px] text-const-blue font-bold hidden md:block">头部央国企</div>
                <div className="absolute bottom-4 -right-4 md:-right-12 text-[10px] text-gray-500 font-bold hidden md:block">激烈红海竞争</div>
            </div>
        </div>
    );
};


// --- MARKET OPPORTUNITY TABLE (RESPONSIVE) ---
export const MarketTable: React.FC = () => {
  const data = [
    {
      title: "城市更新",
      color: "text-const-blue",
      stat: "2029年规模超9万亿",
      sub: "老旧小区/厂房/管网",
      tech: "微创施工、结构加固、非开挖修复",
      model: "政府购买服务、EPC+O（建设+运营）"
    },
    {
      title: "BIPV (光储直柔)",
      color: "text-green-600",
      stat: "2030年规模4000亿",
      sub: "屋顶/幕墙一体化",
      tech: "防水结构一体化、电气安全集成",
      model: "节省电费、余电上网、绿证收益"
    },
    {
      title: "用户侧储能",
      color: "text-green-600",
      stat: "年复合增长率 >100%",
      sub: "工商业/数据中心",
      tech: "消防安全、温控系统集成",
      model: "峰谷价差套利 (回收期3-5年)"
    },
    {
      title: "乡村建设",
      color: "text-const-orange",
      stat: "政策性持续增长",
      sub: "环保设施/装配式农房",
      tech: "小型环保设施、装配式施工",
      model: "以工代赈、EPC总包"
    }
  ];

  return (
    <div className="my-8">
      {/* Mobile View: Cards */}
      <div className="md:hidden space-y-4">
        {data.map((item, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className={`font-bold text-lg mb-2 ${item.color} flex justify-between items-center`}>
              {item.title}
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-normal">蓝海</span>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 font-bold uppercase">关键数据</span>
                <span className="font-medium text-const-dark">{item.stat}</span>
                <span className="text-xs text-gray-500">{item.sub}</span>
              </div>
              <div className="flex flex-col border-t border-gray-50 pt-2">
                <span className="text-xs text-gray-400 font-bold uppercase">核心技术</span>
                <span className="text-gray-700">{item.tech}</span>
              </div>
              <div className="flex flex-col border-t border-gray-50 pt-2">
                <span className="text-xs text-gray-400 font-bold uppercase">盈利模式</span>
                <span className="text-gray-700">{item.model}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View: Table */}
      <div className="hidden md:block overflow-hidden border border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-const-concrete text-const-dark font-bold">
            <tr>
              <th className="px-6 py-3">细分市场</th>
              <th className="px-6 py-3">关键数据/预测</th>
              <th className="px-6 py-3">核心技术/切入点</th>
              <th className="px-6 py-3">盈利模式</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition-colors">
                <td className={`px-6 py-4 font-bold ${item.color}`}>{item.title}</td>
                <td className="px-6 py-4">
                  <div className="font-medium">{item.stat}</div>
                  <div className="text-xs text-gray-500 mt-1">{item.sub}</div>
                </td>
                <td className="px-6 py-4 text-gray-700">{item.tech}</td>
                <td className="px-6 py-4 text-gray-700">{item.model}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- SPECIALIZED INDUSTRY TABS (VERTICAL STACK) ---
export const SpecializedIndustryTabs: React.FC = () => {
    // Defined order: Civil -> MEP -> Decoration -> Power -> Municipal -> Steel -> Waterproof -> Landscape
    const industries = [
        {
            id: "civil",
            label: "土建工程：走向“专科医生”",
            icon: <Shovel size={24} />,
            colorClass: "bg-gray-200 text-gray-700",
            content: (
                <div className="space-y-4">
                     <p className="text-sm text-gray-600 mt-1">
                        <strong>现状：</strong> 大型基建被央企垄断，中小企业生存空间被挤压。城市更新带来“微创手术”需求。<br/>
                        <strong>痛点：</strong> 同质化竞争严重，利润微薄。<br/>
                        <strong>机遇：</strong> <span className="text-green-600 font-bold">结构加固与特种工艺</span>。如既有建筑纠偏、深基坑支护、清水混凝土。
                    </p>
                    <div className="bg-white p-4 rounded border border-gray-200 text-sm">
                        <strong className="block mb-2 text-const-dark">转型路径：</strong>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li><strong>技术壁垒：</strong> 掌握碳纤维加固、桩锚支护等特种技术，做解决疑难杂症的“专科医生”。</li>
                            <li><strong>一体化服务：</strong> 联合检测鉴定机构，提供“诊断-设计-施工”一站式服务。</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: "mep",
            label: "机电安装：智慧浪潮中的求生",
            icon: <Zap size={24} />,
            colorClass: "bg-blue-100 text-const-blue",
            content: (
                <div className="space-y-4">
                    <p className="text-sm text-gray-600 mt-1">
                        <strong>现状：</strong> 技术集成化（IoT/AI），数据中心、智慧医院等新基建需求旺盛。<br/>
                        <strong>痛点：</strong> 缺乏系统集成复合型人才，设备采购垫资压力大。<br/>
                        <strong>机遇：</strong> <span className="text-const-orange font-bold">智慧消防</span>。从被动响应转向主动预警。不仅做施工，更做长期的DaaS（设备即服务）数据运营。
                    </p>
                    <div className="bg-white p-4 rounded border border-gray-200 text-sm">
                        <strong className="block mb-2 text-const-dark">转型路径：</strong>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li><strong>深耕细分：</strong> 专注于数据中心精密空调、古建筑消防等特定场景。</li>
                            <li><strong>拥抱BIM：</strong> 利用BIM进行管线综合，减少返工，优化成本。</li>
                            <li><strong>服务化：</strong> 从工程商转型为服务商，提供长期运维检测服务。</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: "decoration",
            label: "装饰装修：存量时代的价值重构",
            icon: <PaintBucket size={24} />,
            colorClass: "bg-orange-100 text-const-orange",
            content: (
                 <div className="space-y-4">
                    <p className="text-sm text-gray-600 mt-1">
                        <strong>现状：</strong> 新房装修萎缩，旧房翻新与适老化改造成为核心驱动力。装配式装修兴起。<br/>
                        <strong>痛点：</strong> 获客成本高，供应链整合弱，“游击队”式管理口碑差。<br/>
                        <strong>机遇：</strong> <span className="text-const-blue font-bold">局部装配式</span>（集成厨卫）与适老化改造。
                    </p>
                    <div className="bg-white p-4 rounded border border-gray-200 text-sm">
                        <strong className="block mb-2 text-const-dark">转型路径：</strong>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li><strong>聚焦旧改：</strong> 专攻适老化、学区房翻新等“短平快”赛道。</li>
                            <li><strong>数字化获客：</strong> 利用短视频、新媒体进行内容营销，打造“小而美”品牌。</li>
                            <li><strong>工具升级：</strong> 使用SaaS设计平台，提升方案交付速度与体验。</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: "power",
            label: "电力工程：新能源的新角色",
            icon: <Briefcase size={24} />,
            colorClass: "bg-yellow-100 text-yellow-700",
            content: (
                <div className="space-y-4">
                    <p className="text-sm text-gray-600 mt-1">
                        <strong>现状：</strong> 传统电网工程饱和，用户侧（光伏、储能、充电桩）市场爆发。<br/>
                        <strong>痛点：</strong> 并网审批繁琐，EMC模式回款周期长，自投模式资金压力大。<br/>
                        <strong>机遇：</strong> <span className="text-const-blue font-bold">工商业储能与社区充电</span>。光储充一体化。
                    </p>
                    <div className="bg-white p-4 rounded border border-gray-200 text-sm">
                        <strong className="block mb-2 text-const-dark">转型路径：</strong>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li><strong>模式创新：</strong> 灵活运用EPC（赚工程费）、EMC（赚电费差）与自投模式。</li>
                            <li><strong>多元盈利：</strong> 充电桩业务拓展增值服务（广告、便利店），参与虚拟电厂（VPP）响应。</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: "municipal",
            label: "市政公用：聚焦“韧性”与“智慧”",
            icon: <TrafficCone size={24} />,
            colorClass: "bg-red-100 text-red-600",
            content: (
                 <div className="space-y-4">
                    <p className="text-sm text-gray-600 mt-1">
                        <strong>现状：</strong> “韧性城市”与“智慧城市”驱动，城市生命线安全工程受重视。<br/>
                        <strong>痛点：</strong> 回款周期长，资质门槛高，大型项目难介入。<br/>
                        <strong>机遇：</strong> <span className="text-red-600 font-bold">非开挖修复 (CIPP)</span>。智慧管廊运维，海绵城市透水铺装。
                    </p>
                    <div className="bg-white p-4 rounded border border-gray-200 text-sm">
                        <strong className="block mb-2 text-const-dark">转型路径：</strong>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li><strong>技术突围：</strong> 掌握管道机器人(CCTV)检测、非开挖修复等微创技术。</li>
                            <li><strong>数据服务：</strong> 提供燃气、管网的智能监测数据服务，做城市体检医生。</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: "steel",
            label: "钢结构：政策驱动下的专业化",
            icon: <Warehouse size={24} />,
            colorClass: "bg-slate-200 text-slate-700",
            content: (
                 <div className="space-y-4">
                    <p className="text-sm text-gray-600 mt-1">
                        <strong>现状：</strong> 政策强推装配式建筑，学校医院公建强制采用。BIPV带来屋面结合新需求。<br/>
                        <strong>痛点：</strong> EPC总包要求高，纯构件加工利润薄。<br/>
                        <strong>机遇：</strong> <span className="text-blue-600 font-bold">特种构件与BIPV集成</span>。
                    </p>
                    <div className="bg-white p-4 rounded border border-gray-200 text-sm">
                        <strong className="block mb-2 text-const-dark">转型路径：</strong>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li><strong>做精做专：</strong> 专注于高难度节点深化设计、特种焊接。</li>
                            <li><strong>跨界融合：</strong> 联合防水企业，解决钢结构屋面防水痛点，进军光伏屋面市场。</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: "waterproof",
            label: "建筑防水：存量时代的系统服务",
            icon: <Umbrella size={24} />,
            colorClass: "bg-cyan-100 text-cyan-600",
            content: (
                 <div className="space-y-4">
                    <p className="text-sm text-gray-600 mt-1">
                        <strong>现状：</strong> 房屋渗漏率居高不下，存量修缮需求大。新规落地，质量要求提高。<br/>
                        <strong>痛点：</strong> “马路游击队”扰乱市场，客户信任度低。<br/>
                        <strong>机遇：</strong> <span className="text-cyan-600 font-bold">TPO/喷涂聚脲</span>等高性能材料。引入商业保险。
                    </p>
                    <div className="bg-white p-4 rounded border border-gray-200 text-sm">
                        <strong className="block mb-2 text-const-dark">转型路径：</strong>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li><strong>系统服务商：</strong> 转型“诊断-方案-施工-保险”一体化，变被动维修为主动预防。</li>
                            <li><strong>技术赋能：</strong> 引入红外热成像精准查漏，建立可视化信任。</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: "landscape",
            label: "园林绿化：跨界融合价值跃升",
            icon: <TreePine size={24} />,
            colorClass: "bg-emerald-100 text-emerald-600",
            content: (
                 <div className="space-y-4">
                    <p className="text-sm text-gray-600 mt-1">
                        <strong>现状：</strong> 大规模增绿结束，转向口袋公园、生态修复和高品质养护。<br/>
                        <strong>痛点：</strong> 地产景观萎缩，传统养护利润低。<br/>
                        <strong>机遇：</strong> <span className="text-emerald-600 font-bold">“园林+”跨界</span>。设计施工养护一体化。
                    </p>
                    <div className="bg-white p-4 rounded border border-gray-200 text-sm">
                        <strong className="block mb-2 text-const-dark">转型路径：</strong>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                            <li><strong>场景运营：</strong> 参与口袋公园商业运营（市集/露营），做“内容提供商”。</li>
                            <li><strong>生态修复：</strong> 掌握矿山修复、水体治理技术，承接生态环保项目。</li>
                        </ul>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="my-8 space-y-6">
            {industries.map((industry) => (
                <div key={industry.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                     {/* Header */}
                    <div className="flex items-center gap-3 p-4 bg-gray-50 border-b border-gray-100">
                        <div className={`p-2 rounded ${industry.colorClass}`}>
                            {industry.icon}
                        </div>
                        <h4 className="font-bold text-const-dark text-lg">{industry.label}</h4>
                    </div>
                    {/* Content */}
                    <div className="p-6">
                        {industry.content}
                    </div>
                </div>
            ))}
        </div>
    );
};

// --- STRATEGY PATH CARDS (STATIC) ---
export const StrategyCards: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 border border-const-blue bg-blue-50/50 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-const-blue text-white rounded"><Hammer size={18}/></div>
                    <h4 className="font-bold text-lg text-const-dark">技术深耕型 (特种兵)</h4>
                </div>
                <p className="text-sm text-const-steel mb-4">
                    放弃大而全，精专“特种手术”。例如古建筑平移、桥梁顶升、深基坑支护。
                </p>
                <ul className="list-disc list-inside text-xs text-const-steel space-y-1">
                    <li><strong>核心壁垒：</strong> 专利组合、系统解决方案。</li>
                    <li><strong>策略：</strong> 做大型项目的专业分包，参与标准制定。</li>
                </ul>
            </div>

            <div className="p-6 border border-gray-200 bg-white rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-const-orange text-white rounded"><Briefcase size={18}/></div>
                    <h4 className="font-bold text-lg text-const-dark">产品专注型 (标准化)</h4>
                </div>
                <p className="text-sm text-const-steel mb-4">
                    将非标工程“产品化”。例如地坪工程、装配式内装、成品支架。
                </p>
                <ul className="list-disc list-inside text-xs text-const-steel space-y-1">
                    <li><strong>核心壁垒：</strong> 品牌、渠道网络、标准化交付体系。</li>
                    <li><strong>策略：</strong> 城市合伙人模式，总部赋能+本地落地。</li>
                </ul>
            </div>

             <div className="p-6 border border-gray-200 bg-white rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-600 text-white rounded"><Users size={18}/></div>
                    <h4 className="font-bold text-lg text-const-dark">区域服务型 (地头蛇)</h4>
                </div>
                <p className="text-sm text-const-steel mb-4">
                    扎根本地，做深做透。建立极高的响应速度和信任壁垒。
                </p>
                <ul className="list-disc list-inside text-xs text-const-steel space-y-1">
                    <li><strong>核心壁垒：</strong> 政商关系、快速维修/抢修能力。</li>
                    <li><strong>策略：</strong> 社区化运营，全生命周期服务。</li>
                </ul>
            </div>

             <div className="p-6 border border-gray-200 bg-white rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-600 text-white rounded"><BarChart3 size={18}/></div>
                    <h4 className="font-bold text-lg text-const-dark">管理驱动型 (精益管家)</h4>
                </div>
                <p className="text-sm text-const-steel mb-4">
                    通过极致的成本控制和数字化管理盈利。
                </p>
                <ul className="list-disc list-inside text-xs text-const-steel space-y-1">
                    <li><strong>核心壁垒：</strong> 精益建造体系、供应链整合能力。</li>
                    <li><strong>策略：</strong> 应用SaaS平台，向管理要效益。</li>
                </ul>
            </div>
        </div>
    )
}

// --- FINANCE FLOW CHART (STATIC) ---
export const FinanceFlow: React.FC = () => {
    return (
        <div className="my-8 p-6 bg-const-concrete rounded-lg border border-gray-200">
            <h4 className="text-sm font-bold text-const-dark mb-6 text-center">供应链金融创新：破解融资难</h4>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                <div className="flex-1 bg-white p-4 rounded shadow-sm w-full">
                    <div className="font-bold text-const-dark mb-1">上游/施工方</div>
                    <div className="text-xs text-gray-500">产生应收账款<br/>(合同/发票/验收单)</div>
                </div>
                
                <div className="hidden md:block text-const-blue">➔</div>
                <div className="md:hidden text-const-blue">↓</div>

                <div className="flex-1 bg-blue-50 p-4 rounded border border-blue-200 w-full">
                    <div className="font-bold text-const-blue mb-1">数字化平台</div>
                    <div className="text-xs text-const-steel">区块链确权<br/>数据信用上链</div>
                </div>

                <div className="hidden md:block text-const-blue">➔</div>
                 <div className="md:hidden text-const-blue">↓</div>

                <div className="flex-1 bg-white p-4 rounded shadow-sm w-full">
                    <div className="font-bold text-const-dark mb-1">金融机构</div>
                    <div className="text-xs text-gray-500">见“数”放款<br/>(脱核/免抵押)</div>
                </div>
            </div>
            <div className="mt-6 text-center text-xs text-const-steel bg-white p-3 rounded">
                <span className="font-bold text-const-orange">成效：</span> 平均回款周期从 148天 缩短至 <span className="font-bold text-const-dark">3天</span>
            </div>
        </div>
    )
}

// --- INTERNATIONAL MAP LIST (STATIC) ---
export const InternationalList: React.FC = () => {
    return (
        <div className="bg-const-dark text-white p-6 rounded-lg my-8">
            <div className="flex items-center gap-2 mb-4">
                <Globe className="text-const-blue"/>
                <h4 className="font-bold">出海新蓝海：一带一路</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h5 className="font-bold text-const-orange mb-2 text-sm border-b border-gray-700 pb-1">东南亚 (越南/马来西亚)</h5>
                    <p className="text-xs text-gray-400 mb-2">新能源浪潮下的专业分包盛宴</p>
                    <ul className="text-xs space-y-2 text-gray-300">
                        <li>• <strong>越南PDP8规划：</strong> 1300亿美元电力投资。光伏桩基、钢结构安装。</li>
                        <li>• <strong>马来西亚NETR：</strong> 能源转型，储能设施建设。</li>
                        <li>• <strong>切入点：</strong> 随制造业(如三星、乐高)出海，DPPA绿电项目。</li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold text-const-orange mb-2 text-sm border-b border-gray-700 pb-1">中东 (沙特/阿联酋)</h5>
                    <p className="text-xs text-gray-400 mb-2">国家转型愿景下的高端与创新需求</p>
                    <ul className="text-xs space-y-2 text-gray-300">
                        <li>• <strong>NEOM新城：</strong> 万亿级项目，需求模块化建筑(MiC)、3D打印。</li>
                        <li>• <strong>高端需求：</strong> 顶级文旅项目的幕墙、内装、智慧城市系统。</li>
                        <li>• <strong>风险：</strong> 极高的履约标准，严格的劳工本地化(Saudization)。</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

// --- DIGITAL TOOLS PYRAMID (STATIC) ---
export const DigitalToolsPyramid: React.FC = () => {
    return (
        <div className="my-8 flex flex-col items-center">
            <div className="w-full max-w-2xl space-y-2">
                
                {/* Step 1: Foundation (DingTalk) - Top */}
                <div className="bg-white border border-gray-200 rounded p-4 shadow-sm relative mx-auto w-full flex flex-col md:flex-row items-center gap-4 border-l-4 border-l-const-blue">
                    <div className="bg-gray-100 text-gray-600 p-3 rounded-full flex-shrink-0">
                        <Smartphone size={24} />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h4 className="font-bold text-const-dark text-sm mb-1">第一步：基础夯实 (协同办公)</h4>
                        <div className="text-xs text-const-blue font-bold mb-1">推荐：钉钉 (DingTalk) / 企业微信</div>
                        <p className="text-xs text-gray-500">
                            <strong>适用：</strong> 数字化起步阶段，全员普及。<br/>
                            <strong>核心：</strong> 沟通、考勤打卡、流程审批、视频会议。
                        </p>
                    </div>
                </div>

                {/* Connector */}
                <div className="h-6 w-0.5 bg-gray-300 mx-auto"></div>

                {/* Step 2: Pilot (DouGongYun) - Middle */}
                <div className="bg-white border border-gray-200 rounded p-4 shadow-sm relative mx-auto w-full md:w-5/6 flex flex-col md:flex-row items-center gap-4">
                    <div className="bg-const-blue text-white p-3 rounded-full flex-shrink-0">
                        <Layers size={24} />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h4 className="font-bold text-const-dark text-sm mb-1">第二步：试点突破 (专业项目管理)</h4>
                        <div className="text-xs text-const-blue font-bold mb-1">推荐：斗栱云 (DouGongYun)</div>
                        <p className="text-xs text-gray-500">
                            <strong>适用：</strong> 需要精细化管理，寻求利润增长的中小建企。<br/>
                            <strong>核心：</strong> 成本、进度、物资、合同全周期管理。
                        </p>
                    </div>
                </div>

                {/* Connector */}
                <div className="h-6 w-0.5 bg-gray-300 mx-auto"></div>

                {/* Step 3: Replication (Glodon) - Bottom */}
                <div className="bg-white border border-gray-200 rounded p-4 shadow-sm relative mx-auto w-full md:w-3/4 flex flex-col md:flex-row items-center gap-4">
                    <div className="bg-const-dark text-white p-3 rounded-full flex-shrink-0">
                        <LayoutGrid size={24} />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h4 className="font-bold text-const-dark text-sm mb-1">第三步：复制推广 (集团化管控)</h4>
                        <div className="text-xs text-const-blue font-bold mb-1">推荐：广联达 (Glodon) / 明源云</div>
                        <p className="text-xs text-gray-500">
                            <strong>适用：</strong> 跨区域、多项目的大型企业。<br/>
                            <strong>核心：</strong> ERP、PaaS平台、生态集成、供应链协同。
                        </p>
                    </div>
                </div>

            </div>
             <p className="mt-4 text-xs text-center text-gray-400 italic">图表5：中小建筑企业数字化工具选型阶梯</p>
        </div>
    )
}

// --- 15TH FIVE-YEAR PLAN COMPONENT (NEW) ---
export const FifteenthFiveYearPlan: React.FC = () => {
    return (
        <div className="space-y-8 my-8">
            
            {/* 1. Three Core Trends */}
            <div>
                <h4 className="text-lg font-bold text-const-dark mb-4">“十五五”建筑业三大转型趋势</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                        <div className="flex items-center gap-2 text-green-700 font-bold mb-2">
                            <Sun size={20}/> 绿色低碳 (必选项)
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            不仅是新建建筑，更重要的是<strong>存量改造</strong>。财政补贴+税收优惠+绿色金融是三大推手。
                        </p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <div className="flex items-center gap-2 text-const-blue font-bold mb-2">
                            <Cpu size={20}/> 数字化升级 (工具化)
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                             告别“高大上”，走向“小快轻准”。SaaS协同、轻量化BIM、AI巡检是中小企业利器。
                        </p>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                        <div className="flex items-center gap-2 text-const-orange font-bold mb-2">
                            <Building2 size={20}/> 存量提质 (主战场)
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            大拆大建结束。城市更新、生命线工程、平急两用设施是“小而精”的万亿蓝海。
                        </p>
                    </div>
                </div>
            </div>

            {/* 2. New Infrastructure Opportunities Table */}
            <div className="overflow-hidden border border-gray-200 rounded-lg">
                 <div className="bg-gray-100 p-3 border-b border-gray-200 font-bold text-const-dark text-sm">
                    “新质生产力”基建机会清单
                 </div>
                 <table className="min-w-full text-sm text-left bg-white">
                    <thead className="bg-gray-50 text-gray-500 font-medium text-xs">
                        <tr>
                            <th className="px-4 py-2">领域</th>
                            <th className="px-4 py-2">核心设施需求</th>
                            <th className="px-4 py-2">技术门槛</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-xs text-gray-600">
                        <tr>
                            <td className="px-4 py-3 font-bold text-const-blue"><Cpu size={14} className="inline mr-1"/> 高标准工业厂房</td>
                            <td className="px-4 py-3">半导体/生物医药洁净室、防微振车间</td>
                            <td className="px-4 py-3">百级洁净度、恒温恒湿、微振控制</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 font-bold text-indigo-600"><Wind size={14} className="inline mr-1"/> 能源与算力</td>
                            <td className="px-4 py-3">智算中心、液冷数据中心、光储充场站</td>
                            <td className="px-4 py-3">低PUE值、高密度供电、特种消防</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 font-bold text-sky-500"><Plane size={14} className="inline mr-1"/> 低空经济</td>
                            <td className="px-4 py-3">垂直起降场(Vertiport)、无人机物流枢纽</td>
                            <td className="px-4 py-3">空域协同、自动充电、高强度轻质结构</td>
                        </tr>
                    </tbody>
                 </table>
            </div>

            {/* 3. Dual Drive Model Diagram */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold text-const-dark mb-4 text-center">破解困境：双轮驱动模型</h4>
                <div className="flex flex-col md:flex-row items-stretch justify-center gap-6">
                    {/* Left: Gov Support */}
                    <div className="flex-1 bg-white p-4 rounded shadow-sm border-t-4 border-const-blue">
                        <div className="flex items-center justify-center gap-2 mb-3 text-const-blue font-bold">
                            <Landmark size={20}/> 政府输血
                        </div>
                        <ul className="space-y-2 text-xs text-gray-600">
                            <li className="flex gap-2"><span className="text-blue-400">●</span> <strong>设备更新贷/技改再贷款：</strong> 解决资金瓶颈。</li>
                            <li className="flex gap-2"><span className="text-blue-400">●</span> <strong>“专精特新”奖补：</strong> 真金白银+税收优惠。</li>
                            <li className="flex gap-2"><span className="text-blue-400">●</span> <strong>产教融合：</strong> 订单式培养解决人才断层。</li>
                        </ul>
                    </div>

                    {/* Center Icon */}
                    <div className="flex items-center justify-center text-gray-400">
                        <TrendingUp size={32} />
                    </div>

                    {/* Right: Enterprise Innovation */}
                    <div className="flex-1 bg-white p-4 rounded shadow-sm border-t-4 border-const-orange">
                        <div className="flex items-center justify-center gap-2 mb-3 text-const-orange font-bold">
                            <Lightbulb size={20}/> 企业造血
                        </div>
                         <ul className="space-y-2 text-xs text-gray-600">
                            <li className="flex gap-2"><span className="text-orange-400">●</span> <strong>战略聚焦：</strong> 放弃大而全，做细分冠军。</li>
                            <li className="flex gap-2"><span className="text-orange-400">●</span> <strong>借力打力：</strong> 与科技公司合资、联合体投标。</li>
                            <li className="flex gap-2"><span className="text-orange-400">●</span> <strong>机制创新：</strong> 股权激励、项目跟投绑定核心人才。</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};
