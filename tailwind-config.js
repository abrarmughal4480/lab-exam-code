tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "surface-tint": "#1353d8",
                error: "#ba1a1a",
                "surface-container-low": "#f3f4f5",
                "secondary-fixed": "#e2e2e2",
                "on-surface": "#191c1d",
                "primary-container": "#1a56db",
                "on-surface-variant": "#434654",
                "on-tertiary": "#ffffff",
                "surface-container-highest": "#e1e3e4",
                "primary-fixed-dim": "#b5c4ff",
                "on-secondary-fixed": "#1a1c1c",
                "inverse-on-surface": "#f0f1f2",
                "surface-container-lowest": "#ffffff",
                "on-error-container": "#93000a",
                "on-primary-fixed": "#00174d",
                "tertiary-container": "#5f6265",
                tertiary: "#474a4d",
                primary: "#003fb1",
                background: "#f8f9fa",
                "tertiary-fixed-dim": "#c4c7ca",
                "surface-variant": "#e1e3e4",
                "on-tertiary-fixed-variant": "#44474a",
                secondary: "#5d5f5f",
                "secondary-fixed-dim": "#c6c6c7",
                "on-secondary-container": "#616363",
                "on-primary-container": "#d4dcff",
                "on-primary": "#ffffff",
                "outline-variant": "#c3c5d7",
                "surface-dim": "#d9dadb",
                "inverse-surface": "#2e3132",
                "on-tertiary-fixed": "#191c1f",
                "on-background": "#191c1d",
                "on-secondary": "#ffffff",
                "on-secondary-fixed-variant": "#454747",
                "secondary-container": "#dfe0e0",
                "error-container": "#ffdad6",
                "primary-fixed": "#dbe1ff",
                "on-primary-fixed-variant": "#003dab",
                "tertiary-fixed": "#e0e2e6",
                "surface-container": "#edeeef"
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px"
            },
            spacing: {
                sm: "12px",
                "margin-mobile": "20px",
                gutter: "24px",
                md: "24px",
                lg: "48px",
                "margin-desktop": "64px",
                base: "8px",
                xl: "80px",
                xs: "4px"
            },
            fontFamily: {
                "display-lg-mobile": ["Inter"],
                "body-lg": ["Inter"],
                "headline-md": ["Inter"],
                "headline-md-mobile": ["Inter"],
                "title-lg": ["Inter"],
                "display-lg": ["Inter"],
                "label-sm": ["Inter"],
                "body-md": ["Inter"],
                "label-md": ["Inter"]
            },
            fontSize: {
                "display-lg-mobile": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
                "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
                "headline-md": ["30px", { lineHeight: "1.3", fontWeight: "600" }],
                "headline-md-mobile": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
                "title-lg": ["20px", { lineHeight: "1.4", fontWeight: "600" }],
                "display-lg": ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
                "label-sm": ["12px", { lineHeight: "1.2", fontWeight: "600" }],
                "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
                "label-md": ["14px", { lineHeight: "1.2", letterSpacing: "0.01em", fontWeight: "500" }]
            }
        }
    }
};
