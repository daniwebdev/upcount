-- Add taxes_enabled column to organizations to enable/disable taxes per organization
ALTER TABLE organizations ADD COLUMN taxes_enabled INTEGER DEFAULT 1;
