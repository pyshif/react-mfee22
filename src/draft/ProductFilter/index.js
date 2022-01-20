import React, { useState, useEffect } from 'react';
import './index.css';
import FilterBar from './FilterBar';
import SearchBar from './SearchBar';
import SortBar from './SortBar';
import PriceBar from './PriceBar';
import ProductList from './ProductList';
// 自動將 data JSON 轉換成 JSON 物件
import { data } from './data';
// 資料格式
//   {
//     id: '1',
//     picture: 'http://placehold.it/32x32',
//     stock: 5,
//     name: 'iPhone 12 Pro',
//     price: 25000,
//     tags: '蘋果,大螢幕',
//   },

function ProductFilter() {
    // 商品原始資料
    const [products, setProducts] = useState([]);
    // 商品顯示資料（過濾用）
    const [displayProducts, setDisplayProducts] = useState([]);

    // 標籤
    const [tags, setTags] = useState([]);
    // 價格
    const [price, setPrice] = useState([]);
    // 關鍵字
    const [searchWord, setSearchWord] = useState('');
    // 排序
    const [sortBy, setSortBy] = useState('');

    // 載入指示 Loading 用的 spinner
    const [loading, setLoading] = useState(false);

    // n 秒關掉 didUpdate
    useEffect(() => {
        setTimeout(() => {
            if (loading) {
                setLoading(false);
            }
        }, 1500);
    });

    // didMount
    useEffect(() => {
        // 載入指示器
        // 首次加載商品資料
        setProducts(data);
        setDisplayProducts(data);
    }, []);

    // DOM
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="grid search">
                            <div className="grid-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        {/* 傳遞標籤 tag 狀態 */}
                                        <FilterBar d={data} />
                                    </div>

                                    <div className="col-md-9">
                                        <h2>
                                            <i className="fa fa-file-o"></i>{' '}
                                            商品列表
                                        </h2>
                                        <hr />
                                        {/* 傳遞 searchWord 狀態 */}
                                        <SearchBar />
                                        <div className="padding"></div>
                                        {/* 傳遞 sort 狀態 */}
                                        <SortBar />
                                        {/* 將 displayProducts 狀態傳遞下去給子元件顯示 */}
                                        <ProductList
                                            products={displayProducts}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductFilter;
