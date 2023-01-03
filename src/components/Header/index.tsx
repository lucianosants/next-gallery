import { SlidersHorizontal } from 'phosphor-react';

export default function Header() {
    return (
        <header className="header">
            <div
                className="header__brand"
                aria-label="Next Gallery"
                role="textbox"
                tabIndex={0}>
                <h2 className="header__title">Next</h2>

                <img
                    className="header__logo"
                    src="/assets/logo.svg"
                    alt="Logo from next Gallery"
                    tabIndex={0}
                />
            </div>

            <div className="header__menu" role="group" aria-label="menu">
                <label className="header__theme">
                    <input
                        type="checkbox"
                        className="header__btn--theme"
                        title="choose your theme"
                        onChange={() => console.log('changed theme')}
                    />
                </label>

                <button
                    className="header__btn--filter"
                    type="button"
                    title="Filter by items"
                    onClick={() => console.log('filtered')}>
                    <SlidersHorizontal size={24} weight="fill" />
                    Filter
                </button>
            </div>
        </header>
    );
}
