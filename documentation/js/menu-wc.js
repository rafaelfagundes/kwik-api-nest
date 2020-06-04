'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Kwik Docs</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AddonsModule.html" data-type="entity-link">AddonsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AddonsModule-68aefd47aa45204b61ddf5ddba583cc8"' : 'data-target="#xs-controllers-links-module-AddonsModule-68aefd47aa45204b61ddf5ddba583cc8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AddonsModule-68aefd47aa45204b61ddf5ddba583cc8"' :
                                            'id="xs-controllers-links-module-AddonsModule-68aefd47aa45204b61ddf5ddba583cc8"' }>
                                            <li class="link">
                                                <a href="controllers/AddonsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddonsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AddonsModule-68aefd47aa45204b61ddf5ddba583cc8"' : 'data-target="#xs-injectables-links-module-AddonsModule-68aefd47aa45204b61ddf5ddba583cc8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AddonsModule-68aefd47aa45204b61ddf5ddba583cc8"' :
                                        'id="xs-injectables-links-module-AddonsModule-68aefd47aa45204b61ddf5ddba583cc8"' }>
                                        <li class="link">
                                            <a href="injectables/AddonsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AddonsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdressesModule.html" data-type="entity-link">AdressesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AdressesModule-ef698c05834581fa4e44d206577ff225"' : 'data-target="#xs-controllers-links-module-AdressesModule-ef698c05834581fa4e44d206577ff225"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AdressesModule-ef698c05834581fa4e44d206577ff225"' :
                                            'id="xs-controllers-links-module-AdressesModule-ef698c05834581fa4e44d206577ff225"' }>
                                            <li class="link">
                                                <a href="controllers/AdressesController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdressesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AdressesModule-ef698c05834581fa4e44d206577ff225"' : 'data-target="#xs-injectables-links-module-AdressesModule-ef698c05834581fa4e44d206577ff225"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdressesModule-ef698c05834581fa4e44d206577ff225"' :
                                        'id="xs-injectables-links-module-AdressesModule-ef698c05834581fa4e44d206577ff225"' }>
                                        <li class="link">
                                            <a href="injectables/AdressesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AdressesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CatalogsModule.html" data-type="entity-link">CatalogsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CatalogsModule-56935348bc5f52b890c481d32d566b54"' : 'data-target="#xs-controllers-links-module-CatalogsModule-56935348bc5f52b890c481d32d566b54"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CatalogsModule-56935348bc5f52b890c481d32d566b54"' :
                                            'id="xs-controllers-links-module-CatalogsModule-56935348bc5f52b890c481d32d566b54"' }>
                                            <li class="link">
                                                <a href="controllers/CatalogsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CatalogsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CatalogsModule-56935348bc5f52b890c481d32d566b54"' : 'data-target="#xs-injectables-links-module-CatalogsModule-56935348bc5f52b890c481d32d566b54"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CatalogsModule-56935348bc5f52b890c481d32d566b54"' :
                                        'id="xs-injectables-links-module-CatalogsModule-56935348bc5f52b890c481d32d566b54"' }>
                                        <li class="link">
                                            <a href="injectables/CatalogsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CatalogsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CitiesModule.html" data-type="entity-link">CitiesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CitiesModule-500deef63a794a99056eb75a5bb71d50"' : 'data-target="#xs-controllers-links-module-CitiesModule-500deef63a794a99056eb75a5bb71d50"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CitiesModule-500deef63a794a99056eb75a5bb71d50"' :
                                            'id="xs-controllers-links-module-CitiesModule-500deef63a794a99056eb75a5bb71d50"' }>
                                            <li class="link">
                                                <a href="controllers/CitiesController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CitiesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CitiesModule-500deef63a794a99056eb75a5bb71d50"' : 'data-target="#xs-injectables-links-module-CitiesModule-500deef63a794a99056eb75a5bb71d50"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CitiesModule-500deef63a794a99056eb75a5bb71d50"' :
                                        'id="xs-injectables-links-module-CitiesModule-500deef63a794a99056eb75a5bb71d50"' }>
                                        <li class="link">
                                            <a href="injectables/CitiesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CitiesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CombosModule.html" data-type="entity-link">CombosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CombosModule-787d845d6de09cd8033895176d477729"' : 'data-target="#xs-controllers-links-module-CombosModule-787d845d6de09cd8033895176d477729"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CombosModule-787d845d6de09cd8033895176d477729"' :
                                            'id="xs-controllers-links-module-CombosModule-787d845d6de09cd8033895176d477729"' }>
                                            <li class="link">
                                                <a href="controllers/CombosController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CombosController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CombosModule-787d845d6de09cd8033895176d477729"' : 'data-target="#xs-injectables-links-module-CombosModule-787d845d6de09cd8033895176d477729"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CombosModule-787d845d6de09cd8033895176d477729"' :
                                        'id="xs-injectables-links-module-CombosModule-787d845d6de09cd8033895176d477729"' }>
                                        <li class="link">
                                            <a href="injectables/CombosService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CombosService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComplaintsModule.html" data-type="entity-link">ComplaintsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ComplaintsModule-174db7d2deefc29d95a3f444004574b6"' : 'data-target="#xs-controllers-links-module-ComplaintsModule-174db7d2deefc29d95a3f444004574b6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ComplaintsModule-174db7d2deefc29d95a3f444004574b6"' :
                                            'id="xs-controllers-links-module-ComplaintsModule-174db7d2deefc29d95a3f444004574b6"' }>
                                            <li class="link">
                                                <a href="controllers/ComplaintsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ComplaintsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ComplaintsModule-174db7d2deefc29d95a3f444004574b6"' : 'data-target="#xs-injectables-links-module-ComplaintsModule-174db7d2deefc29d95a3f444004574b6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ComplaintsModule-174db7d2deefc29d95a3f444004574b6"' :
                                        'id="xs-injectables-links-module-ComplaintsModule-174db7d2deefc29d95a3f444004574b6"' }>
                                        <li class="link">
                                            <a href="injectables/ComplaintsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ComplaintsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CouponsModule.html" data-type="entity-link">CouponsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CouponsModule-48712dece7efb0afa5b68db2f7c72973"' : 'data-target="#xs-controllers-links-module-CouponsModule-48712dece7efb0afa5b68db2f7c72973"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CouponsModule-48712dece7efb0afa5b68db2f7c72973"' :
                                            'id="xs-controllers-links-module-CouponsModule-48712dece7efb0afa5b68db2f7c72973"' }>
                                            <li class="link">
                                                <a href="controllers/CouponsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CouponsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CouponsModule-48712dece7efb0afa5b68db2f7c72973"' : 'data-target="#xs-injectables-links-module-CouponsModule-48712dece7efb0afa5b68db2f7c72973"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CouponsModule-48712dece7efb0afa5b68db2f7c72973"' :
                                        'id="xs-injectables-links-module-CouponsModule-48712dece7efb0afa5b68db2f7c72973"' }>
                                        <li class="link">
                                            <a href="injectables/CouponsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CouponsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FavoritesModule.html" data-type="entity-link">FavoritesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-FavoritesModule-cc2938a8a33aff3b89517ecc264df411"' : 'data-target="#xs-controllers-links-module-FavoritesModule-cc2938a8a33aff3b89517ecc264df411"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FavoritesModule-cc2938a8a33aff3b89517ecc264df411"' :
                                            'id="xs-controllers-links-module-FavoritesModule-cc2938a8a33aff3b89517ecc264df411"' }>
                                            <li class="link">
                                                <a href="controllers/FavoritesController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FavoritesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FavoritesModule-cc2938a8a33aff3b89517ecc264df411"' : 'data-target="#xs-injectables-links-module-FavoritesModule-cc2938a8a33aff3b89517ecc264df411"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FavoritesModule-cc2938a8a33aff3b89517ecc264df411"' :
                                        'id="xs-injectables-links-module-FavoritesModule-cc2938a8a33aff3b89517ecc264df411"' }>
                                        <li class="link">
                                            <a href="injectables/FavoritesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>FavoritesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ImagesModule.html" data-type="entity-link">ImagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ImagesModule-af8e63c4212ac474aa38da032d3cb63f"' : 'data-target="#xs-controllers-links-module-ImagesModule-af8e63c4212ac474aa38da032d3cb63f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ImagesModule-af8e63c4212ac474aa38da032d3cb63f"' :
                                            'id="xs-controllers-links-module-ImagesModule-af8e63c4212ac474aa38da032d3cb63f"' }>
                                            <li class="link">
                                                <a href="controllers/ImagesController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImagesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ImagesModule-af8e63c4212ac474aa38da032d3cb63f"' : 'data-target="#xs-injectables-links-module-ImagesModule-af8e63c4212ac474aa38da032d3cb63f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ImagesModule-af8e63c4212ac474aa38da032d3cb63f"' :
                                        'id="xs-injectables-links-module-ImagesModule-af8e63c4212ac474aa38da032d3cb63f"' }>
                                        <li class="link">
                                            <a href="injectables/ImagesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ImagesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationsModule.html" data-type="entity-link">NotificationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-NotificationsModule-54f5ecc06ec81fc3ccfc48bb809e709b"' : 'data-target="#xs-controllers-links-module-NotificationsModule-54f5ecc06ec81fc3ccfc48bb809e709b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NotificationsModule-54f5ecc06ec81fc3ccfc48bb809e709b"' :
                                            'id="xs-controllers-links-module-NotificationsModule-54f5ecc06ec81fc3ccfc48bb809e709b"' }>
                                            <li class="link">
                                                <a href="controllers/NotificationsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificationsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NotificationsModule-54f5ecc06ec81fc3ccfc48bb809e709b"' : 'data-target="#xs-injectables-links-module-NotificationsModule-54f5ecc06ec81fc3ccfc48bb809e709b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NotificationsModule-54f5ecc06ec81fc3ccfc48bb809e709b"' :
                                        'id="xs-injectables-links-module-NotificationsModule-54f5ecc06ec81fc3ccfc48bb809e709b"' }>
                                        <li class="link">
                                            <a href="injectables/NotificationsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>NotificationsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link">OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-OrdersModule-f213bdc2d02c5e5c82b8051941a09f4a"' : 'data-target="#xs-controllers-links-module-OrdersModule-f213bdc2d02c5e5c82b8051941a09f4a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrdersModule-f213bdc2d02c5e5c82b8051941a09f4a"' :
                                            'id="xs-controllers-links-module-OrdersModule-f213bdc2d02c5e5c82b8051941a09f4a"' }>
                                            <li class="link">
                                                <a href="controllers/OrdersController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrdersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OrdersModule-f213bdc2d02c5e5c82b8051941a09f4a"' : 'data-target="#xs-injectables-links-module-OrdersModule-f213bdc2d02c5e5c82b8051941a09f4a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrdersModule-f213bdc2d02c5e5c82b8051941a09f4a"' :
                                        'id="xs-injectables-links-module-OrdersModule-f213bdc2d02c5e5c82b8051941a09f4a"' }>
                                        <li class="link">
                                            <a href="injectables/OrdersService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>OrdersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link">ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductsModule-27d16f9bdb3ff207e40ed3daf0842403"' : 'data-target="#xs-controllers-links-module-ProductsModule-27d16f9bdb3ff207e40ed3daf0842403"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductsModule-27d16f9bdb3ff207e40ed3daf0842403"' :
                                            'id="xs-controllers-links-module-ProductsModule-27d16f9bdb3ff207e40ed3daf0842403"' }>
                                            <li class="link">
                                                <a href="controllers/ProductsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductsModule-27d16f9bdb3ff207e40ed3daf0842403"' : 'data-target="#xs-injectables-links-module-ProductsModule-27d16f9bdb3ff207e40ed3daf0842403"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductsModule-27d16f9bdb3ff207e40ed3daf0842403"' :
                                        'id="xs-injectables-links-module-ProductsModule-27d16f9bdb3ff207e40ed3daf0842403"' }>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ProductsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PushtokensModule.html" data-type="entity-link">PushtokensModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PushtokensModule-ae63da10316ae0f3462bd8b86a54ca86"' : 'data-target="#xs-controllers-links-module-PushtokensModule-ae63da10316ae0f3462bd8b86a54ca86"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PushtokensModule-ae63da10316ae0f3462bd8b86a54ca86"' :
                                            'id="xs-controllers-links-module-PushtokensModule-ae63da10316ae0f3462bd8b86a54ca86"' }>
                                            <li class="link">
                                                <a href="controllers/PushtokensController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PushtokensController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PushtokensModule-ae63da10316ae0f3462bd8b86a54ca86"' : 'data-target="#xs-injectables-links-module-PushtokensModule-ae63da10316ae0f3462bd8b86a54ca86"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PushtokensModule-ae63da10316ae0f3462bd8b86a54ca86"' :
                                        'id="xs-injectables-links-module-PushtokensModule-ae63da10316ae0f3462bd8b86a54ca86"' }>
                                        <li class="link">
                                            <a href="injectables/PushtokensService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PushtokensService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RatingsModule.html" data-type="entity-link">RatingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-RatingsModule-72003d597d32b17526c592cda500ef75"' : 'data-target="#xs-controllers-links-module-RatingsModule-72003d597d32b17526c592cda500ef75"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RatingsModule-72003d597d32b17526c592cda500ef75"' :
                                            'id="xs-controllers-links-module-RatingsModule-72003d597d32b17526c592cda500ef75"' }>
                                            <li class="link">
                                                <a href="controllers/RatingsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RatingsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RatingsModule-72003d597d32b17526c592cda500ef75"' : 'data-target="#xs-injectables-links-module-RatingsModule-72003d597d32b17526c592cda500ef75"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RatingsModule-72003d597d32b17526c592cda500ef75"' :
                                        'id="xs-injectables-links-module-RatingsModule-72003d597d32b17526c592cda500ef75"' }>
                                        <li class="link">
                                            <a href="injectables/RatingsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RatingsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SectionsModule.html" data-type="entity-link">SectionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SectionsModule-378bd438ead8ad532833530c985037a4"' : 'data-target="#xs-controllers-links-module-SectionsModule-378bd438ead8ad532833530c985037a4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SectionsModule-378bd438ead8ad532833530c985037a4"' :
                                            'id="xs-controllers-links-module-SectionsModule-378bd438ead8ad532833530c985037a4"' }>
                                            <li class="link">
                                                <a href="controllers/SectionsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SectionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SectionsModule-378bd438ead8ad532833530c985037a4"' : 'data-target="#xs-injectables-links-module-SectionsModule-378bd438ead8ad532833530c985037a4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SectionsModule-378bd438ead8ad532833530c985037a4"' :
                                        'id="xs-injectables-links-module-SectionsModule-378bd438ead8ad532833530c985037a4"' }>
                                        <li class="link">
                                            <a href="injectables/SectionsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SectionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsModule.html" data-type="entity-link">SettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SettingsModule-684c811bd1a713781396ab83f6cf9f93"' : 'data-target="#xs-controllers-links-module-SettingsModule-684c811bd1a713781396ab83f6cf9f93"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SettingsModule-684c811bd1a713781396ab83f6cf9f93"' :
                                            'id="xs-controllers-links-module-SettingsModule-684c811bd1a713781396ab83f6cf9f93"' }>
                                            <li class="link">
                                                <a href="controllers/SettingsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SettingsModule-684c811bd1a713781396ab83f6cf9f93"' : 'data-target="#xs-injectables-links-module-SettingsModule-684c811bd1a713781396ab83f6cf9f93"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SettingsModule-684c811bd1a713781396ab83f6cf9f93"' :
                                        'id="xs-injectables-links-module-SettingsModule-684c811bd1a713781396ab83f6cf9f93"' }>
                                        <li class="link">
                                            <a href="injectables/SettingsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SettingsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SpecialtiesModule.html" data-type="entity-link">SpecialtiesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SpecialtiesModule-760ae7e51285c18de30de49b55565730"' : 'data-target="#xs-controllers-links-module-SpecialtiesModule-760ae7e51285c18de30de49b55565730"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SpecialtiesModule-760ae7e51285c18de30de49b55565730"' :
                                            'id="xs-controllers-links-module-SpecialtiesModule-760ae7e51285c18de30de49b55565730"' }>
                                            <li class="link">
                                                <a href="controllers/SpecialtiesController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SpecialtiesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SpecialtiesModule-760ae7e51285c18de30de49b55565730"' : 'data-target="#xs-injectables-links-module-SpecialtiesModule-760ae7e51285c18de30de49b55565730"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SpecialtiesModule-760ae7e51285c18de30de49b55565730"' :
                                        'id="xs-injectables-links-module-SpecialtiesModule-760ae7e51285c18de30de49b55565730"' }>
                                        <li class="link">
                                            <a href="injectables/SpecialtiesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SpecialtiesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StoresModule.html" data-type="entity-link">StoresModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-StoresModule-87a056c077018482d18695cd1e8391c2"' : 'data-target="#xs-controllers-links-module-StoresModule-87a056c077018482d18695cd1e8391c2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StoresModule-87a056c077018482d18695cd1e8391c2"' :
                                            'id="xs-controllers-links-module-StoresModule-87a056c077018482d18695cd1e8391c2"' }>
                                            <li class="link">
                                                <a href="controllers/StoresController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StoresController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StoresModule-87a056c077018482d18695cd1e8391c2"' : 'data-target="#xs-injectables-links-module-StoresModule-87a056c077018482d18695cd1e8391c2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StoresModule-87a056c077018482d18695cd1e8391c2"' :
                                        'id="xs-injectables-links-module-StoresModule-87a056c077018482d18695cd1e8391c2"' }>
                                        <li class="link">
                                            <a href="injectables/StoresService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>StoresService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StoretypesModule.html" data-type="entity-link">StoretypesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-StoretypesModule-3f3c904ad53f720ce00cf81772d386eb"' : 'data-target="#xs-controllers-links-module-StoretypesModule-3f3c904ad53f720ce00cf81772d386eb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StoretypesModule-3f3c904ad53f720ce00cf81772d386eb"' :
                                            'id="xs-controllers-links-module-StoretypesModule-3f3c904ad53f720ce00cf81772d386eb"' }>
                                            <li class="link">
                                                <a href="controllers/StoretypesController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StoretypesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StoretypesModule-3f3c904ad53f720ce00cf81772d386eb"' : 'data-target="#xs-injectables-links-module-StoretypesModule-3f3c904ad53f720ce00cf81772d386eb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StoretypesModule-3f3c904ad53f720ce00cf81772d386eb"' :
                                        'id="xs-injectables-links-module-StoretypesModule-3f3c904ad53f720ce00cf81772d386eb"' }>
                                        <li class="link">
                                            <a href="injectables/StoretypesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>StoretypesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsedcouponsModule.html" data-type="entity-link">UsedcouponsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsedcouponsModule-648ba4b65380e949a4fb8250d43f1d6d"' : 'data-target="#xs-controllers-links-module-UsedcouponsModule-648ba4b65380e949a4fb8250d43f1d6d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsedcouponsModule-648ba4b65380e949a4fb8250d43f1d6d"' :
                                            'id="xs-controllers-links-module-UsedcouponsModule-648ba4b65380e949a4fb8250d43f1d6d"' }>
                                            <li class="link">
                                                <a href="controllers/UsedcouponsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsedcouponsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsedcouponsModule-648ba4b65380e949a4fb8250d43f1d6d"' : 'data-target="#xs-injectables-links-module-UsedcouponsModule-648ba4b65380e949a4fb8250d43f1d6d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsedcouponsModule-648ba4b65380e949a4fb8250d43f1d6d"' :
                                        'id="xs-injectables-links-module-UsedcouponsModule-648ba4b65380e949a4fb8250d43f1d6d"' }>
                                        <li class="link">
                                            <a href="injectables/UsedcouponsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UsedcouponsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link">UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-4362f2446f48ca6dd61e882aa2f39cb3"' : 'data-target="#xs-controllers-links-module-UsersModule-4362f2446f48ca6dd61e882aa2f39cb3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-4362f2446f48ca6dd61e882aa2f39cb3"' :
                                            'id="xs-controllers-links-module-UsersModule-4362f2446f48ca6dd61e882aa2f39cb3"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-4362f2446f48ca6dd61e882aa2f39cb3"' : 'data-target="#xs-injectables-links-module-UsersModule-4362f2446f48ca6dd61e882aa2f39cb3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-4362f2446f48ca6dd61e882aa2f39cb3"' :
                                        'id="xs-injectables-links-module-UsersModule-4362f2446f48ca6dd61e882aa2f39cb3"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link">AppController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Addon.html" data-type="entity-link">Addon</a>
                            </li>
                            <li class="link">
                                <a href="classes/Address.html" data-type="entity-link">Address</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddressRepository.html" data-type="entity-link">AddressRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/Catalog.html" data-type="entity-link">Catalog</a>
                            </li>
                            <li class="link">
                                <a href="classes/City.html" data-type="entity-link">City</a>
                            </li>
                            <li class="link">
                                <a href="classes/CityRepository.html" data-type="entity-link">CityRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/Combo.html" data-type="entity-link">Combo</a>
                            </li>
                            <li class="link">
                                <a href="classes/Complaint.html" data-type="entity-link">Complaint</a>
                            </li>
                            <li class="link">
                                <a href="classes/ComplaintRepository.html" data-type="entity-link">ComplaintRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/Coupon.html" data-type="entity-link">Coupon</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAddressDTO.html" data-type="entity-link">CreateAddressDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateComplaintDTO.html" data-type="entity-link">CreateComplaintDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateImageDTO.html" data-type="entity-link">CreateImageDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateNotificationDTO.html" data-type="entity-link">CreateNotificationDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRatingDTO.html" data-type="entity-link">CreateRatingDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDTO.html" data-type="entity-link">CreateUserDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/DefaultEntity.html" data-type="entity-link">DefaultEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/Favorite.html" data-type="entity-link">Favorite</a>
                            </li>
                            <li class="link">
                                <a href="classes/Image.html" data-type="entity-link">Image</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImageDTO.html" data-type="entity-link">ImageDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImageRepository.html" data-type="entity-link">ImageRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/Notification.html" data-type="entity-link">Notification</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotificationRepository.html" data-type="entity-link">NotificationRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link">Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link">Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/PushToken.html" data-type="entity-link">PushToken</a>
                            </li>
                            <li class="link">
                                <a href="classes/Rating.html" data-type="entity-link">Rating</a>
                            </li>
                            <li class="link">
                                <a href="classes/RatingRepository.html" data-type="entity-link">RatingRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/Section.html" data-type="entity-link">Section</a>
                            </li>
                            <li class="link">
                                <a href="classes/Setting.html" data-type="entity-link">Setting</a>
                            </li>
                            <li class="link">
                                <a href="classes/Specialty.html" data-type="entity-link">Specialty</a>
                            </li>
                            <li class="link">
                                <a href="classes/Store.html" data-type="entity-link">Store</a>
                            </li>
                            <li class="link">
                                <a href="classes/StoreRepository.html" data-type="entity-link">StoreRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/StoreType.html" data-type="entity-link">StoreType</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateNotificationDTO.html" data-type="entity-link">UpdateNotificationDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRatingDTO.html" data-type="entity-link">UpdateRatingDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsedCoupon.html" data-type="entity-link">UsedCoupon</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRepository.html" data-type="entity-link">UserRepository</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link">AppService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});