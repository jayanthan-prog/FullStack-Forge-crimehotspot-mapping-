import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  TrendingUp,
  Brain,
  MapPin,
  FileText,
  Users,
  Search,
  Filter,
  Download
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ComposedChart
} from 'recharts';

// Expanded Mock Data
const MOCK_CRIME_DATA = {
  monthly_stats: [
    { month: 'Jan', cases: 120, resolved: 85, unresolved: 35 },
    { month: 'Feb', cases: 145, resolved: 102, unresolved: 43 },
    { month: 'Mar', cases: 135, resolved: 95, unresolved: 40 },
    { month: 'Apr', cases: 160, resolved: 112, unresolved: 48 },
    { month: 'May', cases: 175, resolved: 125, unresolved: 50 },
    { month: 'Jun', cases: 190, resolved: 138, unresolved: 52 }
  ],
  crime_types: [
    { type: 'Theft', count: 45 },
    { type: 'Assault', count: 30 },
    { type: 'Cybercrime', count: 20 },
    { type: 'Fraud', count: 15 },
    { type: 'Others', count: 10 }
  ],
  hotspots: [
    { id: 1, location: 'Central Market', incidents: 35, risk: 'High' },
    { id: 2, location: 'Downtown Area', incidents: 28, risk: 'Medium' },
    { id: 3, location: 'Industrial Zone', incidents: 22, risk: 'Low' },
    { id: 4, location: 'University Campus', incidents: 18, risk: 'Medium' }
  ],
  recent_reports: [
    { id: 1, title: 'Robbery at Convenience Store', status: 'investigating', location: 'Main Street', timestamp: '2h ago' },
    { id: 2, title: 'Cyber Fraud Case', status: 'pending', location: 'Online', timestamp: '1d ago' },
    { id: 3, title: 'Vehicle Theft', status: 'resolved', location: 'Parking Lot', timestamp: '3d ago' },
    { id: 4, title: 'Assault Report', status: 'investigating', location: 'Downtown', timestamp: '12h ago' }
  ],
  demographic_data: [
    { category: '18-25', percentage: 25 },
    { category: '26-35', percentage: 35 },
    { category: '36-45', percentage: 20 },
    { category: '46-55', percentage: 12 },
    { category: '55+', percentage: 8 }
  ]
};

const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#6366F1'];

const Dashboard: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'High Priority', value: 'high' },
    { label: 'Resolved', value: 'resolved' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Crime Analytics Dashboard</h1>
            <p className="mt-2 text-gray-600">Comprehensive Crime Insights and Predictive Analysis</p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition">
              <Download size={18} />
              <span>Export Report</span>
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-300 transition">
              <Search size={18} />
              <span>Advanced Search</span>
            </button>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            title: 'Active Cases',
            value: '24',
            icon: Clock,
            color: 'bg-blue-500',
            trend: '+5% from last month'
          },
          {
            title: 'Resolved Cases',
            value: '156',
            icon: CheckCircle,
            color: 'bg-green-500',
            trend: '+12% from last month'
          },
          {
            title: 'High Priority',
            value: '8',
            icon: AlertTriangle,
            color: 'bg-red-500',
            trend: '-2% from last month'
          },
          {
            title: 'AI Prediction Accuracy',
            value: '89%',
            icon: Brain,
            color: 'bg-purple-500',
            trend: 'Machine Learning Model'
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="mt-2 text-3xl font-semibold text-gray-800">{stat.value}</p>
                <p className="mt-2 text-xs text-gray-500">{stat.trend}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="text-white" size={24} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Monthly Crime Trends</h2>
            <div className="flex space-x-2">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setActiveFilter(option.value)}
                  className={`px-3 py-1 rounded-full text-xs transition ${
                    activeFilter === option.value 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={MOCK_CRIME_DATA.monthly_stats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="cases" fill="#4F46E5" name="Total Cases" />
                <Line type="monotone" dataKey="resolved" stroke="#10B981" name="Resolved" />
                <Line type="monotone" dataKey="unresolved" stroke="#EF4444" name="Unresolved" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Crime Type Distribution</h2>
          <div className="h-80 flex items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={MOCK_CRIME_DATA.crime_types}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="count"
                  nameKey="type"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {MOCK_CRIME_DATA.crime_types.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Crime Hotspots</h2>
            <MapPin className="text-gray-400" size={20} />
          </div>
          <div className="space-y-4">
            {MOCK_CRIME_DATA.hotspots.map((hotspot) => (
              <div 
                key={hotspot.id} 
                className={`flex items-center justify-between p-3 rounded-lg transition 
                  ${hotspot.risk === 'High' ? 'bg-red-50 border-l-4 border-red-500' : 
                     hotspot.risk === 'Medium' ? 'bg-yellow-50 border-l-4 border-yellow-500' : 
                     'bg-green-50 border-l-4 border-green-500'}`}
              >
                <div>
                  <p className="font-medium text-gray-800">{hotspot.location}</p>
                  <p className="text-sm text-gray-600">{hotspot.incidents} incidents</p>
                </div>
                <div className={`font-semibold ${
                  hotspot.risk === 'High' ? 'text-red-600' : 
                  hotspot.risk === 'Medium' ? 'text-yellow-600' : 
                  'text-green-600'
                }`}>
                  {hotspot.risk} Risk
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Recent Incident Reports</h2>
            <FileText className="text-gray-400" size={20} />
          </div>
          <div className="space-y-4">
            {MOCK_CRIME_DATA.recent_reports.map((report) => (
              <div 
                key={report.id} 
                className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-800">{report.title}</p>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    report.status === 'resolved' ? 'bg-green-100 text-green-800' :
                    report.status === 'investigating' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {report.status}
                  </span>
                </div>
                <div className="flex justify-between mt-1">
                  <p className="text-sm text-gray-600">{report.location}</p>
                  <p className="text-xs text-gray-500">{report.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Demographic Insights</h2>
            <Users className="text-gray-400" size={20} />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOCK_CRIME_DATA.demographic_data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="category" />
                <YAxis label={{ value: 'Percentage', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="percentage" fill="#6366F1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Age Group Distribution of Crime Incidents</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;