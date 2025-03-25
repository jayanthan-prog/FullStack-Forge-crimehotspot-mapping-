import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Map, { Marker, Popup } from 'react-map-gl';
import { MapPin, Calendar, Users } from 'lucide-react';
import { MOCK_CRIME_DATA } from '../types/crime';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGVtby11c2VyIiwiYSI6ImNscDFtbm1qZzBnOHoybG4ydW96YmxqemkifQ.VoSJ7RH_4YB0LbuOYHYgHw';

const CrimeMap: React.FC = () => {
  const [viewState, setViewState] = useState({
    latitude: 8.7642,
    longitude: 78.1348,
    zoom: 12,
  });
  const [selectedHotspot, setSelectedHotspot] = useState<any>(null);
  const [showPatrolModal, setShowPatrolModal] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 p-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Crime Map</h1>
          <p className="mt-2 text-gray-600">Interactive map of crime hotspots</p>
        </div>
        <button
          onClick={() => setShowPatrolModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Users size={20} />
          Allocate Patrol
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg h-[600px]">
            <Map
              {...viewState}
              onMove={(evt) => setViewState(evt.viewState)}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              mapboxAccessToken={MAPBOX_TOKEN}
              style={{ width: '100%', height: '100%', borderRadius: '1rem' }}
            >
              {MOCK_CRIME_DATA.hotspots.map((hotspot) => (
                <Marker
                  key={hotspot.id}
                  latitude={hotspot.lat}
                  longitude={hotspot.lng}
                  onClick={(e) => {
                    e.originalEvent.stopPropagation();
                    setSelectedHotspot(hotspot);
                  }}
                >
                  <MapPin className="text-red-500 w-8 h-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-red-600 transition-colors" />
                </Marker>
              ))}
              {selectedHotspot && (
                <Popup
                  latitude={selectedHotspot.lat}
                  longitude={selectedHotspot.lng}
                  onClose={() => setSelectedHotspot(null)}
                  closeButton={true}
                  closeOnClick={false}
                 >
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800">{selectedHotspot.location}</h3>
                    <p className="text-sm text-gray-600">{selectedHotspot.incidents} incidents reported</p>
                  </div>
                </Popup>
              )}
            </Map>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Hotspot Analysis</h2>
            <div className="space-y-4">
              {MOCK_CRIME_DATA.hotspots.map((hotspot) => (
                <div
                  key={hotspot.id}
                  className="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={() => {
                    setViewState({
                      ...viewState,
                      latitude: hotspot.lat,
                      longitude: hotspot.lng,
                      zoom: 14,
                    });
                    setSelectedHotspot(hotspot);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-800">{hotspot.location}</p>
                    <span className="text-red-500 font-medium">{hotspot.incidents}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">High risk area</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">AI Recommendations</h2>
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="font-medium text-purple-900">Optimal Patrol Times</p>
                <p className="text-sm text-purple-700 mt-1">18:00 - 22:00</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="font-medium text-blue-900">Required Officers</p>
                <p className="text-sm text-blue-700 mt-1">4-6 officers per shift</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPatrolModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full mx-4"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Schedule Patrol Meeting</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Patrol Meeting Title"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input
                    type="date"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Time</label>
                  <input
                    type="time"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <select className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {MOCK_CRIME_DATA.hotspots.map((hotspot) => (
                    <option key={hotspot.id} value={hotspot.id}>
                      {hotspot.location}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  rows={3}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Meeting agenda and details..."
                ></textarea>
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowPatrolModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Schedule Meeting
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default CrimeMap;
