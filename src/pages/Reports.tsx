import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Upload, Paperclip, Send } from 'lucide-react';

const Reports: React.FC = () => {
  const [formData, setFormData] = useState({
    complainant_name: '',
    complainant_address: '',
    incident_date: '',
    incident_time: '',
    incident_location: '',
    incident_type: '',
    description: '',
    witnesses: '',
    evidence: [] as File[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle FIR submission
    console.log('FIR Data:', formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        evidence: [...prev.evidence, ...Array.from(e.target.files || [])]
      }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">File FIR</h1>
          <p className="mt-2 text-gray-600">Create a new First Information Report</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
          <FileText size={20} />
          View All FIRs
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Complainant Name
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.complainant_name}
                onChange={e => setFormData(prev => ({ ...prev, complainant_name: e.target.value }))}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Complainant Address
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.complainant_address}
                onChange={e => setFormData(prev => ({ ...prev, complainant_address: e.target.value }))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Incident Date
              </label>
              <input
                type="date"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.incident_date}
                onChange={e => setFormData(prev => ({ ...prev, incident_date: e.target.value }))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Incident Time
              </label>
              <input
                type="time"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.incident_time}
                onChange={e => setFormData(prev => ({ ...prev, incident_time: e.target.value }))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Incident Location
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.incident_location}
                onChange={e => setFormData(prev => ({ ...prev, incident_location: e.target.value }))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Incident Type
              </label>
              <select
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.incident_type}
                onChange={e => setFormData(prev => ({ ...prev, incident_type: e.target.value }))}
              >
                <option value="">Select type</option>
                <option value="theft">Theft</option>
                <option value="assault">Assault</option>
                <option value="burglary">Burglary</option>
                <option value="vandalism">Vandalism</option>
                <option value="fraud">Fraud</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Incident Description
            </label>
            <textarea
              required
              rows={4}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.description}
              onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Witnesses (if any)
            </label>
            <textarea
              rows={2}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.witnesses}
              onChange={e => setFormData(prev => ({ ...prev, witnesses: e.target.value }))}
              placeholder="Enter witness details (name and contact information)"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Evidence Attachments
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                    <span>Upload files</span>
                    <input
                      type="file"
                      multiple
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, PDF up to 10MB each
                </p>
              </div>
            </div>
            {formData.evidence.length > 0 && (
              <div className="mt-4 space-y-2">
                {formData.evidence.map((file, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <Paperclip size={16} />
                    <span>{file.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Send size={20} />
              Submit FIR
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Reports;