import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);
    try {
      // Replace with real API call
      await new Promise((res) => setTimeout(res, 1000));
      console.log({ email, password, remember });
      // on success, redirect or set auth state
    } catch (err) {
      setError("Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="page">
        <div className="card">
          <aside className="visual" aria-hidden="true">
            <div className="visual-content">
              <h2>Welcome back</h2>
              <p>Sign in to continue to your account</p>
            </div>
          </aside>

          <main className="form-area">
            <form className="form" onSubmit={handleSubmit} noValidate>
              <h1 className="title">Sign in</h1>

              {error && <div className="error" role="alert">{error}</div>}

              <label className="field">
                <span className="label-text">Email</span>
                <input
                  type="email"
                  inputMode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  aria-required="true"
                />
              </label>

              <label className="field">
                <span className="label-text">Password</span>
                <div className="password-row">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                    aria-required="true"
                  />
                  <button
                    type="button"
                    className="toggle"
                    onClick={() => setShowPassword((s) => !s)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </label>

              <div className="options">
                <label className="remember">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <span>Remember me</span>
                </label>
                <a className="forgot" href="#" onClick={(e)=>e.preventDefault()}>
                  Forgot?
                </a>
              </div>

              <button className="submit" type="submit" disabled={loading}>
                {loading ? <span className="spinner" aria-hidden="true" /> : "Sign in"}
              </button>

              <div className="divider">or continue with</div>

              <div className="socials">
                <button type="button" className="social">Continue with Google</button>
                <button type="button" className="social">Continue with GitHub</button>
              </div>

              <p className="signup">
                Don't have an account? <a href="#" onClick={(e)=>e.preventDefault()}>Sign up</a>
              </p>
            </form>
          </main>
        </div>
      </div>

      <style jsx>{`
        :root{
          --bg:#f6f8fb;
          --card:#ffffff;
          --accent:#4f46e5;
          --muted:#6b7280;
          --danger:#ef4444;
          --radius:12px;
        }
        *{box-sizing:border-box}
        body,html,#__next{height:100%}
        .page{
          min-height:100vh;
          display:flex;
          align-items:center;
          justify-content:center;
          background:linear-gradient(180deg,var(--bg),#eef2ff 60%);
          padding:24px;
        }
        .card{
          width:100%;
          max-width:980px;
          background:var(--card);
          border-radius:var(--radius);
          box-shadow:0 8px 30px rgba(17,24,39,0.08);
          display:grid;
          grid-template-columns: 1fr 420px;
          overflow:hidden;
        }

        .visual{
          display:flex;
          align-items:center;
          justify-content:center;
          padding:48px;
          background:linear-gradient(135deg,#7c3aed,#06b6d4);
          color:white;
        }
        .visual-content{max-width:340px}
        .visual h2{margin:0 0 8px;font-size:28px}
        .visual p{margin:0;opacity:0.95}

        .form-area{padding:36px 28px;display:flex;align-items:center;justify-content:center}
        .form{width:100%;max-width:360px}
        .title{margin:0 0 16px;font-size:20px;color:#111827}

        .error{background:#fff5f5;border:1px solid rgba(239,68,68,0.12);color:var(--danger);padding:10px;border-radius:8px;margin-bottom:12px}

        .field{display:block;margin-bottom:16px}
        .label-text{display:block;margin-bottom:8px;color:var(--muted);font-size:13px}
        input[type="email"], input[type="password"], input[type="text"]{
          width:100%;
          padding:12px 14px;
          border:1px solid #e6e9ee;
          border-radius:8px;
          background:transparent;
          outline:none;
          font-size:15px;
        }
        input:focus{box-shadow:0 0 0 4px rgba(79,70,229,0.08);border-color:var(--accent)}
        .password-row{display:flex;gap:8px}
        .password-row input{flex:1}
        .toggle{
          background:transparent;
          border:1px solid #e6e9ee;
          border-radius:8px;
          padding:8px 10px;
          cursor:pointer;
          font-size:13px;
          color:var(--muted);
        }

        .options{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
        .remember{display:flex;align-items:center;gap:8px;color:var(--muted);font-size:14px}
        .forgot{color:var(--accent);text-decoration:none;font-size:14px}

        .submit{
          width:100%;
          background:var(--accent);
          color:white;
          border:none;
          padding:12px;
          border-radius:10px;
          font-weight:600;
          cursor:pointer;
          margin-top:6px;
          display:inline-flex;
          justify-content:center;
          align-items:center;
        }
        .submit:disabled{opacity:0.7;cursor:default}

        .spinner{
          width:18px;
          height:18px;
          border:2px solid rgba(255,255,255,0.35);
          border-top-color:white;
          border-radius:50%;
          animation:spin 1s linear infinite;
          display:inline-block;
        }
        @keyframes spin{to{transform:rotate(360deg)}}

        .divider{margin:18px 0;text-align:center;color:var(--muted);font-size:13px}

        .socials{display:flex;gap:8px;flex-direction:column}
        .social{
          width:100%;
          padding:10px;
          border-radius:8px;
          border:1px solid #e6e9ee;
          background:white;
          cursor:pointer;
        }

        .signup{margin-top:14px;color:var(--muted);font-size:14px}
        .signup a{color:var(--accent);text-decoration:none}

        /* Responsive */
        @media (max-width:900px){
          .card{grid-template-columns:1fr;max-width:720px}
          .visual{padding:28px}
        }
        @media (max-width:600px){
          .card{border-radius:10px}
          .visual{display:none}
          .form-area{padding:20px}
        }
      `}</style>
    </>
  );
}