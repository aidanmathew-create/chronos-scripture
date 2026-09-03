import { useState } from 'react';
import { supabase } from '@/services/supabaseClient';
import { X, Loader2, Cloud, LogOut } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess: () => void;
  isSignedIn: boolean;
  userEmail: string | null;
  onSignOut: () => void;
}

export function AuthModal({ isOpen, onClose, onAuthSuccess, isSignedIn, userEmail, onSignOut }: AuthModalProps) {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (mode === 'signup') {
        const { error: signUpError } = await supabase.auth.signUp({ email, password });
        if (signUpError) throw signUpError;
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
        if (signInError) throw signInError;
      }
      onAuthSuccess();
      onClose();
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Authentication failed';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-50" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm animate-fade-in">
        <div className="manuscript-card rounded-xl p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-lg text-ink-200/60 hover:text-burgundy-200 hover:bg-parchment-200/30 transition-all"
          >
            <X size={18} />
          </button>

          {isSignedIn ? (
            <div className="text-center py-2">
              <Cloud size={36} className="text-gold-600 dark:text-gold-300 mx-auto mb-3" />
              <h3 className="text-xl font-bold burgundy-text dark:text-gold-200 mb-1" style={{ fontFamily: '"EB Garamond", serif' }}>
                Cloud Sync Active
              </h3>
              <p className="text-sm text-ink-200/60 dark:text-parchment-200/60 mb-4">
                Signed in as {userEmail}
              </p>
              <p className="text-xs text-ink-200/50 dark:text-parchment-200/50 mb-4">
                Your reading progress, timeline position, and streaks sync automatically across all your devices.
              </p>
              <button
                onClick={() => {
                  onSignOut();
                  onClose();
                }}
                className="flex items-center gap-2 mx-auto px-5 py-2 rounded-lg text-sm font-medium text-burgundy-200 hover:bg-burgundy-50/30 transition-all"
              >
                <LogOut size={16} />
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2 mb-4">
                <Cloud size={24} className="text-gold-600 dark:text-gold-300" />
                <h3 className="text-xl font-bold burgundy-text dark:text-gold-200" style={{ fontFamily: '"EB Garamond", serif' }}>
                  {mode === 'signin' ? 'Sign In to Sync' : 'Create Account'}
                </h3>
              </div>
              <p className="text-sm text-ink-200/60 dark:text-parchment-200/60 mb-4">
                Sync your reading progress, streaks, and position across all your devices.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-parchment-100/50 dark:bg-ink-100/50 border border-gold-300/30 text-ink-200 dark:text-parchment-100 text-sm focus:outline-none focus:border-gold-400 transition-all"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full px-4 py-2.5 rounded-lg bg-parchment-100/50 dark:bg-ink-100/50 border border-gold-300/30 text-ink-200 dark:text-parchment-100 text-sm focus:outline-none focus:border-gold-400 transition-all"
                />

                {error && (
                  <p className="text-sm text-burgundy-300 dark:text-burgundy-600 bg-burgundy-50/20 p-2 rounded-lg">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 rounded-lg font-semibold text-lg btn-burgundy flex items-center justify-center gap-2 disabled:opacity-50"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Please wait...
                    </>
                  ) : (
                    mode === 'signin' ? 'Sign In' : 'Create Account'
                  )}
                </button>
              </form>

              <button
                onClick={() => {
                  setMode(mode === 'signin' ? 'signup' : 'signin');
                  setError(null);
                }}
                className="block mx-auto mt-3 text-sm text-gold-600 dark:text-gold-300 hover:underline"
              >
                {mode === 'signin' ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
