-- Fix the permissive INSERT policy on applications
-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Users can create applications" ON public.applications;

-- Create a more secure INSERT policy (allow authenticated users to create applications)
CREATE POLICY "Authenticated users can create applications"
ON public.applications FOR INSERT
WITH CHECK (auth.uid() IS NOT NULL);