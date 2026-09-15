const SUPABASE_URL = "https://zqbgkwlevbmicdepqzxa.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_nTMvXD8unoGQGqsljgtuvQ_42z6qHCL";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  }
);

window.sb = supabaseClient;


async function testSupabaseConnection() {
  try {

    const {
      data,
      error
    } = await supabaseClient.auth.getSession();

    if (error) {
      console.error(
        "❌ Supabase connection error:",
        error.message
      );

      return false;
    }

    console.log(
      "✅ Supabase client connected successfully"
    );

    if (data.session) {
      console.log(
        "✅ Active session:",
        data.session.user.email
      );
    } else {
      console.log(
        "ℹ️ No active login session"
      );
    }

    return true;

  } catch (error) {

    console.error(
      "❌ Supabase error:",
      error
    );

    return false;
  }
}


testSupabaseConnection();