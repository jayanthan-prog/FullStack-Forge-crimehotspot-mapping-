import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, Cell
} from 'recharts';
import { Calendar, ChevronDown, Filter, BarChart3, Activity, Layers } from 'lucide-react';

const Analytics: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('30d');
  
  // Sample data - would be replaced with real API calls
  const incidentTrendData = [
    { month: 'Jan', violent: 42, nonViolent: 87, traffic: 63 },
    { month: 'Feb', violent: 38, nonViolent: 79, traffic: 58 },
    { month: 'Mar', violent: 45, nonViolent: 92, traffic: 65 },
    { month: 'Apr', violent: 39, nonViolent: 85, traffic: 69 },
    { month: 'May', violent: 37, nonViolent: 78, traffic: 61 },
    { month: 'Jun', violent: 43, nonViolent: 82, traffic: 66 },
  ];
  
  const responseTimeData = [
    { category: 'Emergency', time: 4.2 },
    { category: 'Urgent', time: 8.7 },
    { category: 'Non-urgent', time: 15.3 },
    { category: 'Administrative', time: 24.8 },
  ];
  
  const crimeTypeData = [
    { name: 'Theft', value: 35 },
    { name: 'Assault', value: 20 },
    { name: 'Fraud', value: 15 },
    { name: 'Vandalism', value: 12 },
    { name: 'DUI', value: 10 },
    { name: 'Other', value: 8 },
  ];
  
  const districtPerformanceData = [
    { district: 'North', clearance: 72, satisfaction: 83, response: 92 },
    { district: 'South', clearance: 68, satisfaction: 87, response: 88 },
    { district: 'East', clearance: 75, satisfaction: 79, response: 91 },
    { district: 'West', clearance: 70, satisfaction: 82, response: 85 },
    { district: 'Central', clearance: 82, satisfaction: 89, response: 94 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Police Department Analytics</h1>
        
        <div className="flex space-x-4">
          <div className="relative">
            <button className="flex items-center bg-white rounded-lg shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Calendar className="mr-2 h-4 w-4" />
              {timeRange === '7d' ? 'Last 7 days' : 
               timeRange === '30d' ? 'Last 30 days' : 
               timeRange === '90d' ? 'Last 90 days' : 'Custom'}
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
          
          <button className="flex items-center bg-white rounded-lg shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </button>
        </div>
      </div>
      
      {/* Dashboard Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Incidents</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">1,284</p>
            </div>
            <div className="bg-blue-100 p-2 rounded-lg">
              <BarChart3 className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-green-500 text-sm font-medium flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              4.3%
            </span>
            <span className="text-gray-500 text-sm ml-2">vs last period</span>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Avg. Response Time</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">8.2 min</p>
            </div>
            <div className="bg-green-100 p-2 rounded-lg">
              <Activity className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-green-500 text-sm font-medium flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              12.1%
            </span>
            <span className="text-gray-500 text-sm ml-2">vs last period</span>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Clearance Rate</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">72.5%</p>
            </div>
            <div className="bg-purple-100 p-2 rounded-lg">
              <Layers className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-green-500 text-sm font-medium flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              3.8%
            </span>
            <span className="text-gray-500 text-sm ml-2">vs last period</span>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Community Rating</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">4.2/5</p>
            </div>
            <div className="bg-yellow-100 p-2 rounded-lg">
              <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-yellow-500 text-sm font-medium flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
              0.1%
            </span>
            <span className="text-gray-500 text-sm ml-2">vs last period</span>
          </div>
        </motion.div>
      </div>
      
      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('overview')}
              className={`whitespace-nowrap py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'overview' 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('incidents')}
              className={`whitespace-nowrap py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'incidents' 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Incidents
            </button>
            <button
              onClick={() => setActiveTab('performance')}
              className={`whitespace-nowrap py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'performance' 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Performance
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`whitespace-nowrap py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'resources' 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Resources
            </button>
          </nav>
        </div>
        
        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-gray-900">Monthly Incident Trends</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={incidentTrendData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="violent" 
                      stroke="#EF4444" 
                      strokeWidth={2}
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="nonViolent" 
                      stroke="#3B82F6" 
                      strokeWidth={2} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="traffic" 
                      stroke="#10B981" 
                      strokeWidth={2} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Crime Type Distribution</h2>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={crimeTypeData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {crimeTypeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Average Response Time by Priority</h2>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={responseTimeData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Bar dataKey="time" fill="#3B82F6" radius={[4, 4, 0, 0]}>
                          {responseTimeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">District Performance Metrics</h2>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={districtPerformanceData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="district" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="clearance" name="Clearance Rate %" fill="#3B82F6" />
                      <Bar dataKey="satisfaction" name="Satisfaction Score" fill="#10B981" />
                      <Bar dataKey="response" name="Response Time Score" fill="#F59E0B" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'incidents' && (
            <div className="space-y-6">
              <p className="text-gray-700">Detailed incident data and analysis would be displayed here.</p>
            </div>
          )}
          
          {activeTab === 'performance' && (
            <div className="space-y-6">
              <p className="text-gray-700">Department performance metrics would be displayed here.</p>
            </div>
          )}
          
          {activeTab === 'resources' && (
            <div className="space-y-6">
              <p className="text-gray-700">Resource allocation and management data would be displayed here.</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Analytics;