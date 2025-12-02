
import React, { useState, useEffect, useRef } from 'react';
import { T, FULL_NETWORK_DATA } from '../constants';
import { generateResponse } from '../services/geminiService';

interface NetworkPageProps {
  onBack: () => void;
  lang: string;
}

const NetworkPage: React.FC<NetworkPageProps> = ({ onBack, lang }) => {
  const [network, setNetwork] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [reportLoading, setReportLoading] = useState(false);
  const [reportContent, setReportContent] = useState("");
  const [nodesDataSet, setNodesDataSet] = useState<any>(null);
  const [edgesDataSet, setEdgesDataSet] = useState<any>(null);
  const [analyzed, setAnalyzed] = useState(false);
  const [selectedNodeName, setSelectedNodeName] = useState<string>("");

  useEffect(() => {
    if (window.vis) {
      const nodes = new window.vis.DataSet();
      const edges = new window.vis.DataSet();
      setNodesDataSet(nodes);
      setEdgesDataSet(edges);

      nodes.add({
        id: "32540", // Li Bai's ID in the dataset
        label: "李白",
        color: "#dc2626", // Red as requested
        size: 40,
        title: "诗仙", font: { size: 20 }
      });
    }
  }, []);

  useEffect(() => {
    return () => {
      if (network) {
        network.destroy();
      }
    }
  }, [network]);

  useEffect(() => {
    if (network) {
      setTimeout(() => {
        network.fit();
        network.redraw();
      }, 300);
    }
  }, [reportContent, network]);

  useEffect(() => {
    if (containerRef.current && nodesDataSet && edgesDataSet && !network) {
      const data = { nodes: nodesDataSet, edges: edgesDataSet };
      const options = {
        nodes: { shape: "dot", font: { color: "#333", face: 'Inter' }, borderWidth: 0 },
        physics: {
          forceAtlas2Based: { gravitationalConstant: -60, springLength: 100 },
          minVelocity: 0.75,
          solver: "forceAtlas2Based"
        },
        interaction: { hover: true }
      };
      const net = new window.vis.Network(containerRef.current, data, options);
      setNetwork(net);

      net.on("click", (params: any) => {
        if (params.nodes.length > 0) {
          const nodeId = params.nodes[0];
          if (nodeId === "32540" || nodeId === "0000") { // Check both possible IDs for Li Bai
             generateReport("李白");
             return;
          }
          const nodeData = nodesDataSet.get(nodeId);
          generateReport(nodeData.label);
        }
      });
    }
  }, [nodesDataSet, edgesDataSet, network]);

  const startProcess = () => {
    setLoading(true);
    setReportContent("");
    setSelectedNodeName("");
    
    setTimeout(() => {
      if (nodesDataSet && edgesDataSet) {
        nodesDataSet.clear();
        edgesDataSet.clear();

        // Add Li Bai
        nodesDataSet.add({
            id: "32540",
            label: lang === 'zh' ? "李白" : "Li Bai",
            color: "#dc2626", 
            size: 45,
            title: lang === 'zh' ? "诗仙" : "The Poet Immortal", 
            font: { size: 20, face: 'Noto Serif SC' }
        });

        FULL_NETWORK_DATA.forEach(p => {
            if (p.id === "32540") return;
            
            const hoverText = `${p.name}\n📍 ${p.location}\n❤️ ${p.mood}`;
            nodesDataSet.add({
                id: p.id,
                label: p.name,
                color: p.color,
                size: 25,
                title: hoverText
            });

            edgesDataSet.add({
                from: "32540",
                to: p.id,
                color: { color: p.color, opacity: 0.6 },
                width: 3
            });
        });

        if (network) network.fit();
        setAnalyzed(true);
        setLoading(false);
      }
    }, 500);
  };

  const generateReport = async (name: string) => {
    setSelectedNodeName(name);
    setReportLoading(true);
    setReportContent("");
    const res = await generateResponse('network_report', { name }, lang);
    setReportContent(res);
    setReportLoading(false);
  };

  return (
    <div className="h-screen bg-stone-50 text-gray-800 font-serif animate-fade-in flex flex-col overflow-hidden">
      <div className="fixed top-0 right-0 z-[60] p-4">
          <button onClick={onBack} className="px-5 py-2 rounded-full bg-white/90 border border-gray-300 text-sm hover:bg-gray-100 transition-colors font-medium shadow-sm">
            ✕ {T['life.back'][lang as 'zh'|'en']}
          </button>
      </div>

      <div className="flex-1 flex flex-col pt-16 pb-6 px-6 max-w-[1600px] mx-auto w-full h-full min-h-0">
        
        <div className="bg-white border-b-4 border-blue-600 rounded-t-lg shadow-sm p-5 mb-4 flex-shrink-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <span>📖</span> {lang === 'zh' ? '李白时空情感图谱' : 'Li Bai Spatio-Temporal Affective Map'}
                </h1>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3 text-xs md:text-sm text-gray-600 font-medium">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#08306b]"></span> {lang === 'zh' ? '长安政治圈 (政治抱负/狂喜)' : 'Political Ambition (Deep Blue)'}
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#2171b5]"></span> {lang === 'zh' ? '流放/贬谪路 (悲愤/幻灭)' : 'Exile/Grief (Medium Blue)'}
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#6baed6]"></span> {lang === 'zh' ? '漫游/江湖圈 (山水/闲适)' : 'Nature/Leisure (Sky Blue)'}
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#c6dbef]"></span> {lang === 'zh' ? '其他' : 'Other'}
                    </div>
                </div>
                <p className="text-[10px] text-gray-400 mt-2 tracking-wide">
                    {lang === 'zh' ? '注：节点颜色由 AI 分析判定，点击节点查看深度报告。' : 'Note: Node colors determined by AI analysis. Click nodes for detailed reports.'}
                </p>
            </div>
            
            {!analyzed && (
                <button 
                onClick={startProcess} 
                disabled={loading}
                className="px-6 py-2 bg-gradient-to-r from-blue-700 to-blue-600 text-white font-bold rounded shadow hover:shadow-lg disabled:opacity-50 transition-all flex items-center gap-2 text-sm"
              >
                {loading ? <span className="animate-spin">⌛</span> : <span>⚡</span>}
                {lang === 'zh' ? '开始构建图谱' : 'Build Graph'}
              </button>
            )}
        </div>

        <div className="flex-1 flex flex-col lg:flex-row gap-4 min-h-0 h-full">
          
          <div className="flex-[15] h-full bg-white border border-gray-200 rounded-lg relative shadow-sm overflow-hidden">
            <div ref={containerRef} className="w-full h-full bg-[#fdfbf7]" />
            
            {!analyzed && !loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-[2px] z-10 pointer-events-none">
                 <div className="text-center p-8 bg-white/80 rounded-2xl shadow-xl border border-gray-100">
                    <div className="text-4xl mb-4">🕸️</div>
                    <p className="text-gray-500 font-bold text-lg">{lang === 'zh' ? '暂无数据' : 'No Data'}</p>
                    <p className="text-gray-400 text-sm mt-2">{lang === 'zh' ? '请点击右上角按钮构建人物关系图谱' : 'Please click the button to build the graph'}</p>
                 </div>
              </div>
            )}
            
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-20">
                    <div className="flex flex-col items-center gap-4">
                        <div className="animate-spin text-4xl">☯️</div>
                        <p className="text-gray-600 font-medium animate-pulse">{lang === 'zh' ? '正在加载大唐社交网络数据...' : 'Loading Tang Dynasty Social Network Data...'}</p>
                    </div>
                </div>
            )}
          </div>

          <div className="flex-[6] h-full bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col overflow-hidden">
             
             <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex-shrink-0">
                <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                    {selectedNodeName ? (lang === 'zh' ? `李白与${selectedNodeName}关联分析报告` : `Report: Li Bai & ${selectedNodeName}`) : (lang === 'zh' ? '人物关联分析报告' : 'Relationship Report')}
                </h2>
                <div className="mt-4 h-1 w-16 bg-blue-600 rounded-full"></div>
                <h3 className="text-lg font-bold text-gray-600 mt-4 font-serif">
                   {lang === 'zh' ? '基于《李白全集》的文本挖掘视角' : 'Based on Text Mining of Li Bai\'s Works'}
                </h3>
             </div>

             <div className="flex-1 overflow-y-auto custom-scrollbar p-6 bg-white">
                {reportLoading && (
                  <div className="h-full flex flex-col items-center justify-center text-stone-500 gap-3 opacity-70">
                    <div className="animate-spin text-2xl">🌀</div>
                    <p className="text-sm font-medium animate-pulse">{lang === 'zh' ? 'AI 正在生成深度报告...' : 'AI is generating detailed report...'}</p>
                  </div>
                )}

                {!reportLoading && !reportContent && (
                    <div className="h-full flex flex-col items-center justify-center text-gray-300 text-center p-4">
                    <div className="text-4xl mb-4 opacity-30">👈</div>
                    <p className="text-sm font-sans max-w-[200px] leading-relaxed">
                        {lang === 'zh' ? '点击左侧图谱中的人物节点，在此处生成详细的 GIS 轨迹与 NLP 情感分析报告。' : 'Click a node on the left graph to generate a detailed GIS & NLP analysis report here.'}
                    </p>
                  </div>
                )}

                {reportContent && (
                  <div className="prose prose-stone prose-sm max-w-none font-serif leading-relaxed text-gray-800">
                    <div dangerouslySetInnerHTML={{ __html: window.marked ? window.marked.parse(reportContent) : reportContent }} />
                  </div>
                )}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NetworkPage;
