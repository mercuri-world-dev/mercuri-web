import { supabase } from '../../supabaseClient';

export async function addOrUpdateLibraryResource(title: string, description: string) {
  const { data, error } = await supabase
    .from('library_resources')
    .upsert([{ title, description }]);
  return { data, error };
}