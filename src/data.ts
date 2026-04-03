export type Category = 
  | "Tous"
  | "Produits alimentaires"
  | "Boissons"
  | "Snacks"
  | "Produits d'hygiène"
  | "Produits ménagers"
  | "Fournitures pour hanout";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: "Promo" | "Prix spécial" | string;
  discount?: string;
}

export const products: Product[] = [
  { id: "1", name: "Sucre en poudre 2kg", category: "Produits alimentaires", price: 10.50, oldPrice: 12.00, image: "https://pani.ma/wp-content/uploads/2025/07/%D8%B3%D9%83%D8%B1.jpeg", badge: "Promo", discount: "-12%" },
  { id: "2", name: "Huile de table 5L", category: "Produits alimentaires", price: 75.00, oldPrice: 85.00, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&q=80", badge: "Prix spécial" },
  { id: "3", name: "Lait UHT 1L (Pack de 6)", category: "Boissons", price: 40.00, image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&q=80" },
  { id: "4", name: "Farine de blé 5kg", category: "Produits alimentaires", price: 20.00, oldPrice: 25.00, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80", discount: "-20%" },
  { id: "5", name: "Riz blanc 1kg", category: "Produits alimentaires", price: 12.50, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80" },
  { id: "6", name: "Pâtes Spaghetti 500g", category: "Produits alimentaires", price: 5.50, oldPrice: 6.50, image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=500&q=80", badge: "Promo" },
  { id: "7", name: "Biscuits au chocolat", category: "Snacks", price: 2.00, image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80" },
  { id: "8", name: "Chocolat au lait 100g", category: "Snacks", price: 8.00, oldPrice: 10.00, image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=500&q=80", discount: "-20%" },
  { id: "9", name: "Jus d'orange 1L", category: "Boissons", price: 9.00, image: "https://packtory.design/wp-content/uploads/2022/06/V_NCT_PRD2.png" },
  { id: "10", name: "Soda Cola 1.5L", category: "Boissons", price: 8.50, oldPrice: 9.50, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80", badge: "Prix spécial" },
  { id: "11", name: "Eau minérale 1.5L (Pack de 6)", category: "Boissons", price: 25.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxclhl83kmPvSmus6uYK9d1zeuMEBoYrz-wQ&s" },
  { id: "12", name: "Thon en conserve", category: "Produits alimentaires", price: 11.00, oldPrice: 13.00, image: "https://i-sam.unimedias.fr/2023/07/24/thon.jpeg?auto=format%2Ccompress&cs=tinysrgb&ixlib=php-4.1.0&w=1200", discount: "-15%" },
  { id: "13", name: "Sauce tomate 400g", category: "Produits alimentaires", price: 6.00, image: "https://img.waimaoniu.net/2266/2266-202102231706451355.jpeg" },
  { id: "14", name: "Café moulu 250g", category: "Boissons", price: 18.00, oldPrice: 22.00, image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=500&q=80", badge: "Promo" },
  { id: "15", name: "Thé vert 200g", category: "Boissons", price: 14.00, image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500&q=80" },
  { id: "16", name: "Savon solide (Pack de 4)", category: "Produits d'hygiène", price: 15.00, oldPrice: 18.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIC0O6_sVugwoC3P_SClhbPO3dkwa3DVehzw&s", discount: "-16%" },
  { id: "17", name: "Shampooing 400ml", category: "Produits d'hygiène", price: 22.00, image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&q=80" },
  { id: "18", name: "Liquide vaisselle 1L", category: "Produits ménagers", price: 12.00, oldPrice: 14.00, image: "https://alghandourmarket.ma/wp-content/uploads/2025/05/1000852365.jpg", badge: "Prix spécial" },
  { id: "19", name: "Mouchoirs en papier", category: "Produits d'hygiène", price: 8.00, image: "https://www.thouy.net/storage/essuyage-papier-2/8535/thumbs/550x550___mouchoir-papier-jetable-ouate-10M002(1).jpg" },
  { id: "20", name: "Lessive en poudre 3kg", category: "Produits ménagers", price: 45.00, oldPrice: 55.00, image: "https://s.alicdn.com/@sc04/kf/H667fd73c2d7940e8a023210084292bb84.jpg", discount: "-18%" },
  { id: "21", name: "Chips au sel", category: "Snacks", price: 5.00, image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=500&q=80" },
  { id: "22", name: "Maïs en conserve", category: "Produits alimentaires", price: 9.50, oldPrice: 11.00, image: "https://api-retail.cldprd.bonduelle.com/sites/default/files/styles/ratio_328_410/public/mediacenter/june_2019_legumiz_16_3_received_ideas_about_canned_corn_web_02.jpeg?itok=-P11qd_5", badge: "Promo" },
  { id: "23", name: "Sardines à l'huile", category: "Produits alimentaires", price: 6.50, image: "https://resize.elle.fr/original/var/plain_site/storage/images/elle-a-table/les-dossiers-de-la-redaction/news-de-la-redaction/comment-reutiliser-l-huile-des-sardines-en-boite-4123703/98783973-1-fre-FR/Fini-le-gaspillage-comment-reutiliser-l-huile-des-sardines-en-boite.jpg" },
  { id: "24", name: "Confiture de fraise 370g", category: "Produits alimentaires", price: 14.00, oldPrice: 17.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT7lZBGJe2VG9ChgaRmMUKufaIIdjXDi2eGg&s", discount: "-17%" },
  { id: "25", name: "Miel pur 500g", category: "Produits alimentaires", price: 45.00, image: "https://valleedessens.ma/wp-content/uploads/2023/08/Miel-Multifleurs.jpg" },
  { id: "26", name: "Beurre 200g", category: "Produits alimentaires", price: 16.00, oldPrice: 18.50, image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&q=80", badge: "Prix spécial" },
  { id: "27", name: "Fromage fondu (64 portions)", category: "Produits alimentaires", price: 42.00, image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=500&q=80" },
  { id: "28", name: "Yaourt nature (Pack de 4)", category: "Produits alimentaires", price: 8.00, oldPrice: 9.00, image: "https://www.la-ferme-desiris.fr/wp-content/uploads/2020/06/Pack-Yaourts-Fermier-nature.png", discount: "-11%" },
  { id: "29", name: "Eau gazeuse 1L", category: "Boissons", price: 6.00, image: "https://smarket.ma/wp-content/uploads/2023/01/oulmes-1l.png" },
  { id: "30", name: "Jus de pomme 1L", category: "Boissons", price: 9.50, oldPrice: 11.00, image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500&q=80", badge: "Promo" },
  { id: "31", name: "Boisson énergétique", category: "Boissons", price: 12.00, image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=500&q=80" },
  { id: "32", name: "Cacahuètes grillées", category: "Snacks", price: 3.50, oldPrice: 4.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ycuuutl8kW4d_kkbVyTKJeeVo6JEJhOFmw&s", discount: "-22%" },
  { id: "33", name: "Gaufrettes vanille", category: "Snacks", price: 2.50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOCTE8EdBrGhNPIoXINeEqbrijiDUNgJZJjg&s" },
  { id: "34", name: "Bonbons assortis", category: "Snacks", price: 1.00, badge: "Prix spécial", image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=500&q=80" },
  { id: "35", name: "Dentifrice 75ml", category: "Produits d'hygiène", price: 13.00, oldPrice: 16.00, image: "https://citymall-para.ma/wp-content/uploads/2023/06/Gum-Bio-fresh-mint-dentifrice-75ml-7020-5.png", discount: "-18%" },
  { id: "36", name: "Gel douche 250ml", category: "Produits d'hygiène", price: 18.00, image: "https://storage.googleapis.com/sales-img-ma-live/web/cache/sylius_large/a0/26/cb58d9264fd118ade8fe28daeff3.jpg" },
  { id: "37", name: "Déodorant spray", category: "Produits d'hygiène", price: 25.00, oldPrice: 30.00, image: "https://assets.boots.com/content/dam/boots/brands/brand---s/sure/sure_bt/2024_sure_bt/sure_bt_2024-09/2024-07_sure_brand-treatment_50-static_onwards-journey_check-out-our-non-stop-protection-range.dam.ts%3D1725367277897.jpg", badge: "Promo" },
  { id: "38", name: "Nettoyant sol 1L", category: "Produits ménagers", price: 14.00, image: "https://www.mymarket.ma/cdn/shop/products/image_4cd95872-b96d-4b9e-afb7-12d4737128a6.png?v=1654508017" },
  { id: "39", name: "Éponge (Pack de 3)", category: "Produits ménagers", price: 6.00, oldPrice: 8.00, image: "https://www.bricodeco.ma/media/catalog/product/cache/fef1aba966e5c0aa5811e1ac2709b98e/1/0/106909.jpg", discount: "-25%" },
  { id: "40", name: "Sacs poubelle 50L", category: "Fournitures pour hanout", price: 12.00, image: "https://mrbricolage.ma/wp-content/uploads/2026/03/id_153180_sku_851271.jpg" },
  { id: "41", name: "Papier caisse thermique", category: "Fournitures pour hanout", price: 20.00, oldPrice: 25.00, image: "https://msland.ma/wp-content/uploads/2023/09/80mm-x-80mm-thermal-paper-roll42188095134-min.png", badge: "Prix spécial" },
  { id: "42", name: "Stylos à bille (Boîte)", category: "Fournitures pour hanout", price: 35.00, image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=500&q=80" },
  { id: "43", name: "Carnet de crédit", category: "Fournitures pour hanout", price: 10.00, oldPrice: 12.00, image: "https://m.media-amazon.com/images/I/719uvWd6D-L._AC_UF1000,1000_QL80_.jpg", discount: "-16%" },
  { id: "44", name: "Balance électronique", category: "Fournitures pour hanout", price: 250.00, image: "https://image.made-in-china.com/202f0j00eGzMpKREYgkA/40-Kg-Acs-Series-Price-Computing-Scale-User-Manual-Electronic-Commercial-Scale-for-Retail-Use.webp" },
  { id: "45", name: "Présentoir comptoir", category: "Fournitures pour hanout", price: 120.00, oldPrice: 150.00, image: "https://i0.wp.com/plvevent.com/wp-content/uploads/2024/04/presentoir-produit-cosmetique.jpg?resize=960%2C1024&ssl=1", badge: "Promo" },
  { id: "46", name: "Sachets plastiques (100)", category: "Fournitures pour hanout", price: 15.00, image: "https://m.media-amazon.com/images/I/61Vop0ztCBL._AC_UF1000,1000_QL80_.jpg" },
  { id: "47", name: "Eau de Javel 2L", category: "Produits ménagers", price: 8.00, oldPrice: 10.00, image: "https://www.filfafrance.fr/8260-home_tablet_default/orlav-eau-de-javel-26-2l.webp", discount: "-20%" },
  { id: "48", name: "Essuie-tout (2 rouleaux)", category: "Produits ménagers", price: 11.00, image: "https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=500&q=80" }
];
