const randomColor = () => {
  const colors = ['#FEF2F2', '#FEE2E2', '#FECACA', '#FCA5A5', '#F87171', '#EF4444', '#DC2626', '#B91C1C', '#7F1D1D',
    '#FEF3C7', '#FDE68A', '#FCD34D', '#FBBF24', '#F59E0B', '#BFDBFE',
    '#93C5FD', '#FBCFE8', '#EDE9FE',
    '#DDD6FE', '#E0E7FF',
    '#C7D2FE',
    '#A5B4FC',
    '#818CF8','#D1FAE5',
    '#A7F3D0',
    '#6EE7B7',
    '#34D399',
    '#10B981',
    '#059669',
    '#047857',
    '#6366F1',
    '#4F46E5',
    '#4338CA',
    '#3730A3',
    '#C4B5FD',
    '#A78BFA',
    '#8B5CF6',
    '#7C3AED',
    '#6D28D9',
    '#5B21B6',
    '#F9A8D4',
    '#F472B6',
    '#EC4899',
    '#DB2777',
    '#BE185D',
    '#9D174D',
    '#60A5FA',
    '#3B82F6',
    '#2563EB',
    '#1D4ED8',
    '#1E40AF',
  ]
  return `${colors[Math.floor(Math.random() * colors.length)]}`
}

export const fromAndTo = () => {
  return [randomColor(), randomColor()];
}