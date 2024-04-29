import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kctgbiterobvcxkyqbom.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjdGdiaXRlcm9idmN4a3lxYm9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzNzk2MjIsImV4cCI6MjAyOTk1NTYyMn0.iFO_txr9GM35JyUZ0mFZKXVtVl8inDcnuh33RO7kKug';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
