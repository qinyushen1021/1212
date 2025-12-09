
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { PestelGrid, MarketTable, StrategyCards, FinanceFlow, InternationalList, DigitalToolsPyramid, QualificationPyramid, MacroDataTable, SpecializedIndustryTabs, FifteenthFiveYearPlan } from './components/Diagrams';
import { Hammer, FileText, ChevronRight, Download, ShieldCheck, Banknote, PieChart, Users, Truck, Scale, FileSignature } from 'lucide-react';

const App: React.FC = () => {
  const sections = [
    { id: 'abstract', title: '摘要' },
    { id: 'prologue', title: '序言：十四五困境回顾' },
    { id: 'chapter1', title: '一、行业背景与现状' },
    { id: 'chapter2', title: '二、细分行业研究专篇' },
    { id: 'chapter3', title: '三、核心发展趋势' },
    { id: 'chapter4', title: '四、差异化发展路径' },
    { id: 'chapter5', title: '五、内部管理优化' },
    { id: 'chapter6', title: '六、融资策略与创新' },
    { id: 'chapter7', title: '七、国际化出海' },
    { id: 'chapter8', title: '八、赋能工具包' },
    { id: 'chapter9', title: '九、十五五规划专篇' },
    { id: 'chapter10', title: '十、展望与结语' },
  ];

  return (
    <div className="min-h-screen bg-[#F4F5F7] text-const-dark font-sans flex flex-col">
      
      {/* Main Content Area */}
      <main className="w-full max-w-4xl mx-auto p-6 md:p-12 my-8 bg-white shadow-xl rounded-xl">
        
        {/* Header Section */}
        <header className="mb-12 border-b border-gray-200 pb-12 text-center">
            <div className="inline-block px-3 py-1 bg-blue-100 text-const-blue text-xs font-bold rounded-full mb-4">
                深度研究报告
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-const-dark mb-6 leading-tight">
                2026中小建筑企业<br/>发展白皮书
            </h1>
            <p className="text-xl text-const-steel leading-relaxed max-w-3xl mx-auto">
                从规模扩张到高质量发展：微利时代下的“专精特新”生存法则与破局之道。
            </p>
        </header>

        {/* Table of Contents */}
        <nav className="mb-16 bg-gray-50 p-8 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-6 border-b border-gray-200 pb-2">
                <Hammer size={20} className="text-const-blue"/>
                <h3 className="text-lg font-serif font-bold text-const-dark">目录</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                {sections.map((section) => (
                    <a 
                        key={section.id} 
                        href={`#${section.id}`} 
                        className="flex items-center justify-between group py-1 border-b border-gray-100 last:border-0"
                    >
                        <span className="text-gray-700 group-hover:text-const-blue transition-colors font-medium">
                            {section.title}
                        </span>
                        <ChevronRight size={14} className="text-gray-300 group-hover:text-const-blue opacity-0 group-hover:opacity-100 transition-all"/>
                    </a>
                ))}
            </div>
            <div className="mt-8 pt-4 border-t border-gray-200 flex justify-center">
                 <button className="flex items-center gap-2 bg-const-dark text-white py-2 px-6 rounded hover:bg-const-blue transition-colors text-xs font-bold uppercase shadow-sm">
                    <Download size={14} /> 下载完整PDF
                 </button>
            </div>
        </nav>

        {/* Abstract */}
        <section id="abstract" className="mb-20 scroll-mt-20">
            <h2 className="text-2xl font-serif font-bold mb-6 text-const-dark flex items-center gap-2 border-l-4 border-const-orange pl-4">
                摘要
            </h2>
            <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                    步入2026年，中国建筑行业正处在一个由高速增长转向高质量发展的深刻变革与转型的关键节点。
                    传统的以规模扩张和要素投入为特征的粗放式增长模式已难以为继。在此背景下，占据行业企业数量98%以上的中小建筑企业，
                    面临前所未有的挑战，同时也蕴含着结构性的新生机遇。
                </p>
                <p className="mb-4">
                    本报告明确指出，<strong>技术、市场和政策</strong>是驱动行业未来变革的三大核心引擎。
                    面对挑战与机遇并存的复杂局面，中小建筑企业唯有主动拥抱变化，彻底放弃规模取胜的路径依赖，
                    坚定不移地走<strong>“专精特新”</strong>的发展道路。
                </p>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 my-8">
                    <h4 className="font-bold text-const-dark mb-3">本报告核心观点：</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex gap-2"><span className="text-const-blue font-bold">1.</span> <span><strong>挑战是“体感”，机遇是“认知”：</strong> 城市更新、新能源基建是结构性蓝海。</span></li>
                        <li className="flex gap-2"><span className="text-const-blue font-bold">2.</span> <span><strong>转型是“必答题”，路径是“个性化”：</strong> 拒绝盲目跟风，选择适合自己的赛道。</span></li>
                        <li className="flex gap-2"><span className="text-const-blue font-bold">3.</span> <span><strong>“专精特新”是“出路”：</strong> 避开大路竞争，做细分领域的隐形冠军。</span></li>
                        <li className="flex gap-2"><span className="text-const-blue font-bold">4.</span> <span><strong>两大基石：</strong> 项目精益管理与合规内控体系。</span></li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Prologue: 14th Five-Year Plan Review */}
        <section id="prologue" className="mb-20 scroll-mt-20 border-t border-gray-100 pt-10">
            <h2 className="text-2xl font-serif font-bold mb-8 text-const-dark flex items-center gap-2 border-l-4 border-gray-400 pl-4">
                序言：“十四五”时期困境回顾
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold mb-4 text-const-dark">一、宏观数据透视：增量放缓与利润承压</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    “十四五”期间，受宏观经济增速放缓及房地产深度调整影响，建筑业已告别高速扩张，进入白热化的存量竞争时代。
                    数据显示，总产值增速逐年下滑，新签合同额连续两年负增长，中小企业接单难度显著加大。
                </p>
                
                {/* Insert Macro Data Table */}
                <MacroDataTable />

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-const-blue mb-2">1.2 “金字塔”结构固化</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            行业集中度加速提升，<strong>CR8（前8名市占率）</strong>从2021年的39.4%跃升至2024年的<strong>48.7%</strong>。
                            特级、一级资质企业垄断了近70%的产值，中小企业只能在剩余的红海市场中“增收不增利”。
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-const-orange mb-2">1.3 细分市场分化</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            <strong>房建承压：</strong> 传统房屋建筑业增长乏力，受房地产拖累明显。<br/>
                            <strong>基建托底：</strong> 土木工程建筑业成为增长引擎，但这往往是大型央企的主场，中小企业需寻找缝隙市场。
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Chapter 1 */}
        <section id="chapter1" className="mb-20 scroll-mt-20 border-t border-gray-100 pt-10">
            <h2 className="text-2xl font-serif font-bold mb-8 text-const-dark flex items-center gap-2 border-l-4 border-const-blue pl-4">
                一、行业发展背景与中小企业现状
            </h2>
            
            <h3 className="text-lg font-bold mb-4 pl-4">（一）宏观经济与政策环境分析（PESTEL）</h3>
            <PestelGrid />

            <div className="mt-12">
                <h3 className="text-lg font-bold mb-6 pl-4">（二）中小施工企业的现状</h3>
                <div className="bg-white rounded-lg border border-gray-200 p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6 text-gray-700">
                            <div>
                                <h4 className="font-bold text-const-dark text-lg border-b border-gray-100 pb-2 mb-2">1. 数量与规模：金字塔结构</h4>
                                <p className="text-sm leading-relaxed text-gray-600">
                                    中小企业占比超过98%，主要集中在二级、三级及专业承包资质。它们是行业的毛细血管，但处于食物链底端。
                                </p>
                            </div>
                            <div>
                                 <h4 className="font-bold text-const-dark text-lg border-b border-gray-100 pb-2 mb-2">2. 核心痛点</h4>
                                 <ul className="list-disc list-inside text-sm mt-2 space-y-2 text-gray-600">
                                    <li><span className="font-bold text-const-dark">二八效应显著：</span> 20%的头部企业占据80%的市场份额，中小企业合同额增长乏力。</li>
                                    <li><span className="font-bold text-const-dark">盈利能力探底：</span> 行业平均利润率徘徊在3%，中小企业甚至低至1%-2%。</li>
                                    <li><span className="font-bold text-const-dark">高负债与现金流脆弱：</span> 资产负债率高（约75%），应收账款高企，“两头受气”。</li>
                                 </ul>
                            </div>
                        </div>
                        
                        {/* Qualification Pyramid Chart */}
                        <div className="bg-gray-50 p-6 rounded-lg flex justify-center">
                             <QualificationPyramid />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Chapter 2 (New Numbering) */}
        <section id="chapter2" className="mb-20 scroll-mt-20 border-t border-gray-100 pt-10">
            <h2 className="text-2xl font-serif font-bold mb-8 text-const-dark flex items-center gap-2 border-l-4 border-const-blue pl-4">
                 二、细分行业研究专篇
            </h2>
            <div className="mb-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                <p className="text-gray-700 leading-relaxed text-sm">
                    <strong className="text-const-blue">专篇导读：</strong> 在传统市场“红海化”背景下，向“专精特新”转型是中小企业生存的关键。
                    本专篇深入剖析<strong>土建、机电、装饰、电力</strong>等核心赛道，探索细分领域的生存法则与转型机遇。
                </p>
            </div>
            
            <SpecializedIndustryTabs />
            
             <div className="mt-8 bg-gray-50 p-6 rounded border border-gray-200 text-sm text-gray-600 leading-relaxed">
                <strong className="text-const-dark block mb-2">专篇总结：</strong> 
                中小企业必须摒弃“大而全”，从单一施工向“服务商”转型。
                在存量时代，通过“诊断-设计-施工-维保”的一体化服务，构建技术与品牌的护城河。
            </div>
        </section>

        {/* Chapter 3 (New Numbering) */}
        <section id="chapter3" className="mb-20 scroll-mt-20 border-t border-gray-100 pt-10">
            <h2 className="text-2xl font-serif font-bold mb-8 text-const-dark flex items-center gap-2 border-l-4 border-const-blue pl-4">
                 三、核心发展趋势：寻找增量蓝海
            </h2>
            <p className="mb-6 text-gray-600 pl-4">
                市场需求结构正在重塑。传统新建房建趋于饱和，企业应精准切入以下三大蓝海市场：
            </p>
            
            <MarketTable />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-const-blue mb-4 text-lg">城市更新细分赛道</h4>
                    <ul className="text-sm space-y-3 text-gray-600">
                        <li className="flex gap-2"><span className="text-blue-400">●</span> <span><strong>老旧小区改造：</strong> 万亿级市场，需掌握微创施工与适老化改造技术。</span></li>
                        <li className="flex gap-2"><span className="text-blue-400">●</span> <span><strong>工业遗存活化：</strong> "修旧如旧"，文创园改造，需具备结构加固与美学设计能力。</span></li>
                        <li className="flex gap-2"><span className="text-blue-400">●</span> <span><strong>地下管网更新：</strong> "城市生命线"，非开挖修复技术是关键。</span></li>
                    </ul>
                </div>
                <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                     <h4 className="font-bold text-green-600 mb-4 text-lg">新能源基建机遇</h4>
                     <ul className="text-sm space-y-3 text-gray-600">
                        <li className="flex gap-2"><span className="text-green-400">●</span> <span><strong>BIPV：</strong> 解决屋顶防水与结构安全痛点，提供全生命周期运维。</span></li>
                        <li className="flex gap-2"><span className="text-green-400">●</span> <span><strong>充电桩网络：</strong> 解决老旧小区电力增容难点，探索"统建统营"。</span></li>
                        <li className="flex gap-2"><span className="text-green-400">●</span> <span><strong>用户侧储能：</strong> 工商业储能爆发，需具备电气、消防、温控集成能力。</span></li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Chapter 4 (New Numbering) */}
        <section id="chapter4" className="mb-20 scroll-mt-20 border-t border-gray-100 pt-10">
            <h2 className="text-2xl font-serif font-bold mb-8 text-const-dark flex items-center gap-2 border-l-4 border-const-blue pl-4">
                 四、差异化发展路径
            </h2>
            <p className="mb-8 text-gray-600 pl-4">
                "专精特新"是出路。中小企业应根据自身禀赋，选择以下四条路径之一进行深耕。
            </p>
            
            <StrategyCards />

             <div className="bg-const-dark text-white p-8 rounded-lg mt-10 shadow-lg">
                <h3 className="font-serif text-xl mb-4 font-bold text-const-orange">案例启示：切忌"Katerra陷阱"</h3>
                <p className="text-sm text-gray-300 mb-6 leading-relaxed border-l-2 border-gray-600 pl-4">
                    美国建筑独角兽Katerra曾试图通过重资产自建工厂和全产业链整合颠覆行业，最终因扩张过快、管理混乱破产。
                </p>
                <div className="text-sm font-bold text-white bg-white/10 p-4 rounded">
                    教训：中小企业应避免盲目追求"大而全"和重资产投入，应善用成熟的社会化分工体系，做"轻资产、重技术"的专业服务商。
                </div>
            </div>
        </section>

         {/* Chapter 5 (New Numbering) */}
         <section id="chapter5" className="mb-20 scroll-mt-20 border-t border-gray-100 pt-10">
            <h2 className="text-2xl font-serif font-bold mb-8 text-const-dark flex items-center gap-2 border-l-4 border-const-blue pl-4">
                 五、内部管理优化：练好内功
            </h2>
            <p className="mb-8 text-gray-600 pl-4">
                管理能力是企业的免疫系统。中小企业需建立覆盖<strong>合同、资金、成本、财务、供应链、人才、合规</strong>的七大精细化管理体系。
            </p>
            
            <div className="space-y-6">
                
                {/* 1. Contract Management */}
                <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                        <div className="p-3 bg-blue-100 text-const-blue rounded-lg"><FileSignature size={24}/></div>
                        <h3 className="text-xl font-bold text-const-dark">1. 合同管理：全生命周期风控</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-600">
                        <div>
                             <strong className="text-const-orange block mb-2 uppercase text-xs tracking-wider">核心痛点</strong>
                             <ul className="list-disc list-inside space-y-2">
                                <li>重关系轻契约，过程签证管理混乱。</li>
                                <li>谈判地位弱，条款不对等，索赔困难。</li>
                             </ul>
                        </div>
                        <div>
                             <strong className="text-const-blue block mb-2 uppercase text-xs tracking-wider">优化对策</strong>
                             <ul className="list-disc list-inside space-y-2">
                                <li><strong>事前：</strong>多方联合评审，引入AI辅助审查风险条款。</li>
                                <li><strong>事中：</strong>严格签证变更管理，牢记<span className="font-bold text-const-dark">28天索赔时效</span>。</li>
                                <li><strong>事后：</strong>及时结算归档，复盘经验。</li>
                             </ul>
                        </div>
                    </div>
                </div>

                {/* 2. Funds Management */}
                <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                        <div className="p-3 bg-green-100 text-green-700 rounded-lg"><Banknote size={24}/></div>
                        <h3 className="text-xl font-bold text-const-dark">2. 资金管理：现金流为王</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-600">
                        <div>
                             <strong className="text-const-orange block mb-2 uppercase text-xs tracking-wider">核心痛点</strong>
                             <ul className="list-disc list-inside space-y-2">
                                <li>“短贷长投”，垫资压力大。</li>
                                <li>应收账款高企，资金链断裂风险高。</li>
                             </ul>
                        </div>
                        <div>
                             <strong className="text-const-blue block mb-2 uppercase text-xs tracking-wider">优化对策</strong>
                             <ul className="list-disc list-inside space-y-2">
                                <li><strong>全周期规划：</strong>制定年度及月度资金计划，与项目进度联动。</li>
                                <li><strong>预警机制：</strong>设定现金储备率、资产负债率等红线，系统自动预警。</li>
                             </ul>
                        </div>
                    </div>
                </div>

                {/* 3. Cost Management */}
                <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                        <div className="p-3 bg-purple-100 text-purple-700 rounded-lg"><PieChart size={24}/></div>
                        <h3 className="text-xl font-bold text-const-dark">3. 成本管理：数字化三算对比</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-600">
                         <div>
                             <strong className="text-const-orange block mb-2 uppercase text-xs tracking-wider">核心痛点</strong>
                             <ul className="list-disc list-inside space-y-2">
                                <li>成本“糊涂账”，盈亏不可知。</li>
                                <li>事后核算，无法过程纠偏。</li>
                             </ul>
                        </div>
                        <div>
                             <strong className="text-const-blue block mb-2 uppercase text-xs tracking-wider">优化对策</strong>
                             <ul className="list-disc list-inside space-y-2">
                                <li><strong>标准体系：</strong>建立企业级WBS/CBS成本科目标准。</li>
                                <li><strong>动态管控：</strong>利用软件实时进行“预算-计划-实际”三算对比，穿透分析量价偏差。</li>
                             </ul>
                        </div>
                    </div>
                </div>

                {/* 4. Financial Management */}
                <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                        <div className="p-3 bg-orange-100 text-orange-700 rounded-lg"><FileText size={24}/></div>
                        <h3 className="text-xl font-bold text-const-dark">4. 财务管理：业财融合</h3>
                    </div>
                    <div className="text-sm text-gray-600 leading-relaxed">
                        <p className="mb-4"><strong>策略：</strong> 采用“专业项目管理软件（业务核心） + 标准财务软件（核算核心）”的双系统模式。</p>
                        <ul className="list-disc list-inside space-y-2 pl-2 border-l-2 border-gray-100">
                            <li><strong>数据打通：</strong> 业务端的合同、进度、成本数据通过接口自动生成凭证，减少重复录入。</li>
                            <li><strong>决策支持：</strong> 自动生成项目级的实时利润表、现金流量表，为投标和资源调配提供依据。</li>
                        </ul>
                    </div>
                </div>

                {/* 5. Supply Chain */}
                <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                        <div className="p-3 bg-indigo-100 text-indigo-700 rounded-lg"><Truck size={24}/></div>
                        <h3 className="text-xl font-bold text-const-dark">5. 供应链与采购：协同增效</h3>
                    </div>
                    <div className="text-sm text-gray-600 leading-relaxed">
                        <p className="mb-4"><strong>策略：</strong> 从“博弈”走向“协同”。</p>
                        <ul className="list-disc list-inside space-y-2 pl-2 border-l-2 border-gray-100">
                            <li><strong>数字化采购：</strong> 建立在线供应商库，实现询比价、招投标全流程透明化。</li>
                            <li><strong>战略合作：</strong> 培育核心供应商，以长期订单换取账期支持和技术协同。</li>
                        </ul>
                    </div>
                </div>

                {/* 6. HR Management */}
                <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                        <div className="p-3 bg-rose-100 text-rose-700 rounded-lg"><Users size={24}/></div>
                        <h3 className="text-xl font-bold text-const-dark">6. 人力资源：引育留</h3>
                    </div>
                    <div className="text-sm text-gray-600 leading-relaxed">
                        <p className="mb-4"><strong>策略：</strong> 构建现代人力体系，解决人才断层。</p>
                        <ul className="list-disc list-inside space-y-2 pl-2 border-l-2 border-gray-100">
                            <li><strong>考核激励：</strong> 将薪酬与项目利润、回款率等KPI强挂钩。设计项目跟投、利润分红机制。</li>
                            <li><strong>人才梯队：</strong> 建立“师徒制”与系统化培训，重点培养复合型项目经理。</li>
                        </ul>
                    </div>
                </div>

                {/* 7. Compliance */}
                <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                        <div className="p-3 bg-gray-200 text-gray-700 rounded-lg"><ShieldCheck size={24}/></div>
                        <h3 className="text-xl font-bold text-const-dark">7. 合规体系：底线思维</h3>
                    </div>
                    <div className="text-sm text-gray-600 leading-relaxed">
                        <p className="mb-4"><strong>策略：</strong> 建设合规管理体系（CMS），变被动合规为主动防御。</p>
                        <ul className="list-disc list-inside space-y-2 pl-2 border-l-2 border-gray-100">
                            <li><strong>三道防线：</strong> 业务部门（一道）、合规岗（二道）、内审（三道）各司其职。</li>
                            <li><strong>重点领域：</strong> 严防招投标（串标、挂靠）、财税（虚开）、用工（实名制）三大雷区。</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>

        {/* Chapter 6 (New Numbering) */}
        <section id="chapter6" className="mb-20 scroll-mt-20 border-t border-gray-100 pt-10">
            <h2 className="text-2xl font-serif font-bold mb-8 text-const-dark flex items-center gap-2 border-l-4 border-const-blue pl-4">
                 六、融资策略与创新
            </h2>
            <p className="mb-8 text-gray-600 pl-4">
                打破"融资难、融资贵"的恶性循环。除了练好内功，更要善用金融工具。
            </p>

            <FinanceFlow />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-const-dark mb-4 text-lg">1. 政府增信体系</h4>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        利用<strong>“政银担”</strong>模式，由政府担保机构分担风险，担保费率通常&lt;1%。
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        利用<strong>“信易贷”</strong>平台，将纳税、社保等公共信用信息转化为银行授信依据。
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-green-600 mb-4 text-lg">2. 绿色金融</h4>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        将项目的“绿色属性”转化为融资优势。如<strong>“碳数贷”</strong>、<strong>“绿色建筑性能贷”</strong>。
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        节能改造项目的未来收益（如省下的电费）可作为还款来源测算。
                    </p>
                </div>
                 <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-blue-600 mb-4 text-lg">3. 融资租赁 (“融物”)</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        解决购买昂贵设备（如盾构机、机器人、生产线）的资金瓶颈。门槛低、可节税。
                    </p>
                </div>
                 <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-purple-600 mb-4 text-lg">4. 无形资产融资</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        知识产权质押融资。将专利、软著变现。
                    </p>
                </div>
            </div>
        </section>

        {/* Chapter 7 (New Numbering) */}
        <section id="chapter7" className="mb-20 scroll-mt-20 border-t border-gray-100 pt-10">
            <h2 className="text-2xl font-serif font-bold mb-8 text-const-dark flex items-center gap-2 border-l-4 border-const-blue pl-4">
                 七、国际化出海：一带一路新蓝海
            </h2>
            <InternationalList />
            
            <div className="bg-white p-8 rounded-lg border border-gray-200 mt-8 shadow-sm">
                <h4 className="font-bold text-const-dark mb-6 text-lg">中小企业出海四大模式</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-700">
                    <div>
                        <strong className="text-const-blue block mb-2 text-base">1. 借船出海</strong>
                        <p className="text-gray-600">做央国企总包的专业分包商，聚焦细分领域（如钢结构、地基）。风险最低。</p>
                    </div>
                    <div>
                        <strong className="text-const-blue block mb-2 text-base">2. 抱团出海</strong>
                        <p className="text-gray-600">组建产业联盟（如南安建材联盟）或依托境外经贸园区（如泰中罗勇工业园）。</p>
                    </div>
                    <div>
                        <strong className="text-const-blue block mb-2 text-base">3. 合资合作</strong>
                        <p className="text-gray-600">与当地企业成立合资公司（JV），解决市场准入、劳工签证等本土化难题。</p>
                    </div>
                    <div>
                        <strong className="text-const-blue block mb-2 text-base">4. 随船出海</strong>
                        <p className="text-gray-600">跟随国内制造业客户（如新能源车企、电池厂）出海，提供建厂服务。</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Chapter 8 (New Numbering) */}
        <section id="chapter8" className="mb-20 scroll-mt-20 border-t border-gray-100 pt-10">
             <h2 className="text-2xl font-serif font-bold mb-8 text-const-dark flex items-center gap-2 border-l-4 border-const-blue pl-4">
                 八、赋能工具包：工具与政策
            </h2>

            <div className="mb-16">
                <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-200 text-const-dark pl-4">
                    （一）数字化工具选型：拒绝"水土不服"
                </h3>
                <p className="text-gray-600 text-sm mb-8 pl-4 max-w-2xl">
                    中小建筑企业的数字化转型应分阶段进行。切忌在起步阶段盲目上马昂贵的大型ERP。
                    我们建议遵循 <strong>“基础夯实 -> 试点突破 -> 复制推广”</strong> 的演进路径。
                </p>
                
                {/* Visualization for Digital Tools */}
                <DigitalToolsPyramid />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                     <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-sm">
                        <strong className="block text-const-dark mb-3 text-base">1. 协同办公类 (钉钉/企微)</strong>
                        <p className="text-gray-500 text-xs leading-relaxed">
                            解决"人"的问题。免费、易用。适合解决考勤、审批、通知下发、视频会议等基础沟通需求。是数字化的"入口"。
                        </p>
                     </div>
                     <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-sm shadow-sm transform scale-105">
                        <strong className="block text-const-blue mb-3 text-base">2. 专业管理类 (斗栱云)</strong>
                        <p className="text-const-steel text-xs leading-relaxed">
                            解决"项目"的问题。贴合工程行业特性。重点管控成本、进度、物资、合同。实现项目级管理，让项目利润可视。
                        </p>
                     </div>
                     <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-sm">
                        <strong className="block text-const-dark mb-3 text-base">3. 平台生态类 (广联达)</strong>
                        <p className="text-gray-500 text-xs leading-relaxed">
                            解决"企业"的问题。适合多项目、跨区域的集团化管控。提供造价、采购、BIM等多业务线集成，支持二次开发。
                        </p>
                     </div>
                </div>
            </div>
            
            <div className="mt-16">
                <h3 className="text-lg font-bold mb-8 pb-2 border-b border-gray-200 text-const-dark pl-4">
                    （二）核心扶持政策汇编
                </h3>
                <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                    <table className="min-w-full text-sm text-left bg-white">
                        <thead className="bg-gray-50 font-bold text-const-dark border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 w-1/4">政策类别</th>
                                <th className="px-6 py-4 w-1/3">核心支持内容</th>
                                <th className="px-6 py-4 w-1/3">关键申报/应用要点</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {/* Row 1: Specialized & New */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 align-top">
                                    <div className="font-bold text-const-blue text-base">“专精特新”奖补</div>
                                    <div className="text-xs text-gray-500 mt-1">中央及地方财政</div>
                                </td>
                                <td className="px-6 py-4 align-top text-gray-700">
                                    <ul className="list-disc list-inside space-y-2 text-xs">
                                        <li><strong>资金奖励：</strong> 国家级“小巨人”最高获数百万元奖补（如深圳最高50万，累计支持可达600万）。</li>
                                        <li><strong>政府采购优先：</strong> 享受市场准入优势。</li>
                                    </ul>
                                </td>
                                <td className="px-6 py-4 align-top text-gray-600 text-xs">
                                    需体现“专业化、精细化、特色化、新颖化”。
                                    <br/>重点展示细分市场占有率（>10%）、研发占比、核心专利及主导产品。
                                </td>
                            </tr>

                            {/* Row 2: R&D Deduction */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 align-top">
                                    <div className="font-bold text-const-blue text-base">研发费用加计扣除</div>
                                    <div className="text-xs text-gray-500 mt-1">普惠性税收优惠</div>
                                </td>
                                <td className="px-6 py-4 align-top text-gray-700">
                                    <ul className="list-disc list-inside space-y-2 text-xs">
                                        <li><strong>扣除比例：</strong> 按实际发生额的100%在税前加计扣除。</li>
                                        <li><strong>设备扣除：</strong> 500万以下新购设备允许一次性扣除。</li>
                                    </ul>
                                </td>
                                <td className="px-6 py-4 align-top text-gray-600 text-xs">
                                    需提前进行“科技型中小企业”入库登记。
                                    <br/>建立研发支出辅助账，准确归集人员人工、直接投入等费用。
                                </td>
                            </tr>

                            {/* Row 3: Procurement Preference */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 align-top">
                                    <div className="font-bold text-const-blue text-base">政府采购倾斜</div>
                                    <div className="text-xs text-gray-500 mt-1">《政府采购促进中小企业发展管理办法》</div>
                                </td>
                                <td className="px-6 py-4 align-top text-gray-700">
                                    <ul className="list-disc list-inside space-y-2 text-xs">
                                        <li><strong>份额预留：</strong> 超过400万元的工程项目，预留40%以上份额给中小企业。</li>
                                        <li><strong>价格评审优惠：</strong> 对未预留份额项目，给予小微企业报价6%-10%（或更高）的价格扣除。</li>
                                    </ul>
                                </td>
                                <td className="px-6 py-4 align-top text-gray-600 text-xs">
                                    投标时必须按规范提供《中小企业声明函》。
                                    <br/>关注各级公共资源交易中心的专栏信息。
                                </td>
                            </tr>

                            {/* Row 4: Green Building & BIPV */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 align-top">
                                    <div className="font-bold text-const-blue text-base">绿色建筑与BIPV补贴</div>
                                    <div className="text-xs text-gray-500 mt-1">行业专项补贴</div>
                                </td>
                                <td className="px-6 py-4 align-top text-gray-700">
                                    <ul className="list-disc list-inside space-y-2 text-xs">
                                        <li><strong>绿建奖励：</strong> 获得星级标识的项目按面积给予奖补（如二星级50元/㎡）。</li>
                                        <li><strong>光伏补贴：</strong> 北京、广东等地对BIPV项目提供度电补贴（0.3-0.4元/kWh）或初投资补贴。</li>
                                    </ul>
                                </td>
                                <td className="px-6 py-4 align-top text-gray-600 text-xs">
                                    项目需通过绿建评价标识认证。
                                    <br/>关注当地住建委及发改委的具体申报通知（地域差异大）。
                                </td>
                            </tr>

                            {/* Row 5: Financing Support */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 align-top">
                                    <div className="font-bold text-const-blue text-base">专项融资支持</div>
                                    <div className="text-xs text-gray-500 mt-1">普惠金融与信用贷</div>
                                </td>
                                <td className="px-6 py-4 align-top text-gray-700">
                                    <ul className="list-disc list-inside space-y-2 text-xs">
                                        <li><strong>政府性融资担保：</strong> 担保费率降至1%以下，无需抵押。</li>
                                        <li><strong>“信易贷”：</strong> 依托纳税、社保、公积金等数据发放纯信用贷款。</li>
                                        <li><strong>供应链金融：</strong> 凭核心企业订单融资。</li>
                                    </ul>
                                </td>
                                <td className="px-6 py-4 align-top text-gray-600 text-xs">
                                    保持良好的纳税信用（A/B级）和无违规记录。
                                    <br/>注册并登录“全国中小企业融资综合信用服务平台”或地方金服平台。
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        {/* Chapter 9: 15th Five-Year Plan Special (New Numbering) */}
        <section id="chapter9" className="mb-20 scroll-mt-20 border-t border-gray-100 pt-10">
             <h2 className="text-2xl font-serif font-bold mb-8 text-const-dark flex items-center gap-2 border-l-4 border-const-blue pl-4">
                 九、十五五规划专篇：机遇与挑战
            </h2>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm mb-8">
                <p className="mb-6 text-gray-600 leading-relaxed text-sm">
                    “十五五”规划是中国开启全面建设社会主义现代化国家新征程后的第二个五年规划。
                    其核心在于推动<strong>高质量发展</strong>和培育<strong>新质生产力</strong>。
                    对于中小建筑企业而言，这意味着“大拆大建”时代的彻底终结，未来的竞争将聚焦于<strong>绿色化、智能化、细分化</strong>。
                </p>

                <FifteenthFiveYearPlan />

                <div className="space-y-8 mt-10">
                     {/* Subsection 1 */}
                     <div>
                        <h4 className="text-lg font-bold text-const-dark mb-4 border-b border-gray-100 pb-2">（一）“新质生产力”带来的万亿级基建蓝海</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-600">
                            <div>
                                <strong className="text-const-blue block mb-2 text-base">1. 高标准工业厂房</strong>
                                <p className="leading-relaxed">半导体、生物医药产业爆发，催生了对百级洁净室、恒温恒湿车间的巨大需求。预计2026年洁净室市场规模超3500亿元。</p>
                            </div>
                            <div>
                                <strong className="text-const-blue block mb-2 text-base">2. 低空经济基础设施</strong>
                                <p className="leading-relaxed">eVTOL（飞行汽车）垂直起降场(Vertiport)、无人机物流枢纽建设。深圳、上海等地已率先启动规划，万亿市场蓄势待发。</p>
                            </div>
                            <div>
                                <strong className="text-const-blue block mb-2 text-base">3. 城市生命线安全工程</strong>
                                <p className="leading-relaxed">地下管网、桥隧的数字化改造。住建部推动年内改造10万公里老旧管网，对非开挖修复、传感器安装需求迫切。</p>
                            </div>
                             <div>
                                <strong className="text-const-blue block mb-2 text-base">4. 算力与能源设施</strong>
                                <p className="leading-relaxed">“东数西算”带动液冷数据中心建设。分布式光伏、工商业储能成为标配。</p>
                            </div>
                        </div>
                     </div>

                     {/* Subsection 2 */}
                     <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-const-orange">
                        <h4 className="text-lg font-bold text-const-dark mb-3">（二）核心挑战：资金与人才</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                            <li><strong className="text-const-dark">资金瓶颈：</strong> 智能化转型需要购买软硬件，前期投入大。建议积极申请<strong>“设备更新贷”</strong>和<strong>“技改再贷款”</strong>。</li>
                            <li><strong className="text-const-dark">人才断层：</strong> 既懂建筑又懂半导体/IT工艺的复合型人才极度短缺。建议与高校共建<strong>产业学院</strong>，开展订单式培养。</li>
                        </ul>
                     </div>
                </div>
            </div>
        </section>

        {/* Chapter 10: Conclusion (New Numbering) */}
        <section id="chapter10" className="mb-24 scroll-mt-20 border-t border-gray-100 pt-10">
             <h2 className="text-2xl font-serif font-bold mb-8 text-const-dark flex items-center gap-2 border-l-4 border-const-orange pl-4">
                 十、展望与结语
            </h2>
            <div className="bg-const-dark text-white p-12 rounded-xl shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                    <p className="leading-relaxed text-xl font-serif max-w-2xl">
                        2026年将是中小建筑企业的分水岭。
                        告别规模崇拜，拥抱高质量发展。
                        未来的赢家，不再是“包工头”，而是善于利用政策、勇于技术创新、精通精细化管理的
                        <span className="text-const-orange font-bold"> “隐形冠军”</span>。
                    </p>
                    <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-end items-center text-sm text-gray-400">
                        <div className="italic font-serif text-lg text-const-orange">知行合一，破茧成蝶</div>
                    </div>
                </div>
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-const-blue opacity-10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            </div>
        </section>

      </main>
    </div>
  );
};

export default App;
