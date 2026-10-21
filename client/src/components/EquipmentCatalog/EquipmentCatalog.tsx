import { useState } from 'react';
import {
  Package,
  Laptop,
  Network,
  Video,
  Check,
  Wrench,
  ArrowLeft,
  Sparkles,
  ShoppingBag
} from '../common/Icons';
import type { ProductItem, ProductCategory } from '../../types';
import './EquipmentCatalog.css';

interface EquipmentCatalogProps {
  products: ProductItem[];
  onSelectProduct: (productName: string) => void;
}

type FilterTab = {
  id: 'all' | ProductCategory;
  label: string;
  icon: React.ReactNode;
};

const filterTabs: FilterTab[] = [
  { id: 'all', label: 'כל הקטלוג', icon: <Package size={16} /> },
  { id: 'bundles', label: 'חבילות לעסק חדש', icon: <Sparkles size={16} /> },
  { id: 'computers', label: 'מחשבים וציוד היקפי', icon: <Laptop size={16} /> },
  { id: 'networking', label: 'תקשורת וארונות', icon: <Network size={16} /> },
  { id: 'cameras', label: 'מצלמות אבטחה', icon: <Video size={16} /> },
];

export default function EquipmentCatalog({
  products,
  onSelectProduct,
}: EquipmentCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | ProductCategory>('all');

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="catalog" className="catalog-section">
      <div className="catalog-container">
        
        {/* כותרת החלק */}
        <div className="section-header">
          <span className="section-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <ShoppingBag size={14} />
            <span>מכירת חומרה וציוד מקצועי</span>
          </span>
          <h2 className="section-title">חבילות מחשוב וציוד תקשורת לעסקים</h2>
          <p className="section-subtitle">
            אספקת מותגי חומרה מובילים כולל התקנה, הגדרה מלאה והדרכה בבית העסק שלך באזור השרון והמרכז.
          </p>
        </div>

        {/* סינון קטגוריות */}
        <div className="catalog-filters">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`filter-btn ${isActive ? 'active' : ''}`}
              >
                <span className="filter-icon">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* גריד מוצרים */}
        <div className="catalog-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div>
                <div className="product-badges-row">
                  {product.badge && (
                    <span className="product-badge-custom">{product.badge}</span>
                  )}
                  {product.includesInstallation && (
                    <span className="product-badge-installed">
                      <Wrench size={12} />
                      <span>כולל התקנה באתר</span>
                    </span>
                  )}
                </div>

                <h3 className="product-card-title">{product.name}</h3>
                <p className="product-card-desc">{product.description}</p>

                <div className="product-specs-list">
                  {product.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="product-spec-item">
                      <Check size={14} color="var(--color-brand-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="product-card-footer">
                <div>
                  <div className="price-subtext">מחיר מומלץ:</div>
                  <div className="price-main">{product.priceLabel}</div>
                </div>

                <button
                  onClick={() => onSelectProduct(product.name)}
                  className="btn-order-product"
                >
                  <span>בקש הצעה</span>
                  <ArrowLeft size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
