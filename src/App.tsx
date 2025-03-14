import React from 'react';
import { Github, Mail, BookOpen, Code2, Rocket, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80"
            alt="背景"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-bold mb-6">Naprol梅</h1>
          <p className="text-2xl text-gray-300 mb-8">初中生</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">关于我</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&q=80"
              alt="照片"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              我是一名拥有2年半年经验初中生。
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-800 rounded-lg">
                <Code2 className="mb-2 text-blue-400" />
                <h3 className="font-semibold mb-1">技术开发</h3>
                <p className="text-sm text-gray-400">全栈解决方案</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <Rocket className="mb-2 text-purple-400" />
                <h3 className="font-semibold mb-1">系统架构</h3>
                <p className="text-sm text-gray-400">高可用设计</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">项目展示</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:scale-105">
                <img
                  src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80`}
                  alt={`项目 ${i}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">企业管理系统</h3>
                  <p className="text-gray-400 mb-4">基于React和Node.js的现代化企业管理平台</p>
                  <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                    了解更多 <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">专业技能</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'React', level: '95%' },
              { name: 'Node.js', level: '90%' },
              { name: 'TypeScript', level: '85%' },
              { name: 'Python', level: '80%' },
            ].map((skill) => (
              <div key={skill.name} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <BookOpen size={20} />
          </a>
        </div>
        <p className="text-gray-400">© 2025 梅雨辰. 保留所有权利</p>
      </footer>
    </div>
  );
}

export default App;