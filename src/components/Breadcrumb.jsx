import { useNavigate } from 'react-router-dom'

function Breadcrumb({ items }) {
  const navigate = useNavigate()

  return (
    <div className="flex items-center gap-2 flex-wrap mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && (
            <span className="text-border text-sm">›</span>
          )}
          {item.path ? (
            <button
              className="text-sm font-semibold text-t3
                         hover:text-primary transition-colors"
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </button>
          ) : (
            <span className="text-sm font-bold text-primary">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

export default Breadcrumb