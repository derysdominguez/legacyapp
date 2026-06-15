React Project Architecture Assessment

Act as a Principal Frontend Architect and Staff Software Engineer performing a comprehensive architecture review of this React application.

Your goal is to evaluate the current state of the codebase, identify architectural problems, technical debt, maintainability risks, scalability concerns, and provide a detailed modernization roadmap.

Project Context

- Frontend framework: React
- Internal UI Library: metronome-ui
- Existing codebase has grown organically over time.
- There are concerns around:
  - Lack of clear architecture
  - Inconsistent project structure
  - Poor separation of concerns
  - Code duplication
  - Large and complex components
  - Multiple components defined in a single file
  - Poor naming conventions
  - Anti-patterns
  - Low maintainability
  - Low reusability
  - Inconsistent state management patterns
  - Inconsistent data fetching patterns
  - Difficult onboarding experience for new developers

Analysis Requirements

Perform a deep analysis of the entire codebase and generate a report with the following sections.

1. Executive Summary

Provide:

- Overall architecture score (1-10)
- Maintainability score (1-10)
- Scalability score (1-10)
- Developer Experience score (1-10)
- Technical Debt score (1-10)

Summarize the most critical findings.

2. Project Structure Review

Analyze:

- Folder organization
- Feature boundaries
- Domain separation
- Shared vs feature-specific code
- Coupling between modules
- Circular dependencies
- Barrel exports
- Path aliases

Identify:

- What works well
- What creates long-term risk
- Recommended structure

Provide examples.

3. Component Architecture Review

Analyze all components and identify:

- Components that are too large
- Components with multiple responsibilities
- Components with excessive prop drilling
- Components that should be split
- Components containing business logic and presentation logic together
- Repeated UI patterns
- Reusable abstractions that should exist

Report:

- Top 20 most problematic components
- Why they are problematic
- Suggested refactor approach

4. React Best Practices Review

Analyze usage of:

- Hooks
- Effects
- Memoization
- Context
- State management
- Custom hooks
- Rendering patterns

Detect:

- Unnecessary re-renders
- Derived state issues
- Effect abuse
- Missing custom hooks
- React anti-patterns

Provide recommendations.

5. State Management Review

Analyze:

- Local state
- Global state
- Context usage
- Server state

Identify:

- State duplication
- Incorrect ownership of state
- Context misuse
- Opportunities for simplification

Recommend whether additional tools should be considered.

6. Data Fetching Review

Analyze:

- API layer
- Service layer
- Query organization
- Error handling
- Loading states
- Caching strategy

Identify inconsistencies and propose a standardized approach.

7. Design System & UI Review

Analyze the usage of metronome-ui.

Identify:

- Components that bypass the design system
- Duplicated UI components
- Inconsistent usage patterns
- Missing abstractions

Recommend improvements to increase consistency.

8. Code Quality Review

Analyze:

- Naming conventions
- File organization
- Function complexity
- Component complexity
- Type safety
- Dead code
- Unused files
- Unused exports
- Magic values
- Large switch statements
- Deep nesting

Highlight the highest risk areas.

9. TypeScript Review

Analyze:

- any usage
- unsafe casts
- duplicated types
- missing generics
- weak typing
- API contract typing

Recommend improvements.

10. Performance Review

Identify:

- Rendering bottlenecks
- Expensive computations
- Missing memoization
- Bundle size concerns
- Lazy loading opportunities
- Code splitting opportunities

Prioritize improvements by impact.

11. Testing Review

Analyze:

- Unit tests
- Integration tests
- Component tests
- E2E coverage

Identify gaps and risks.

12. Technical Debt Inventory

Create a categorized inventory:

Critical

Must be fixed immediately.

High

Should be addressed within 1-2 quarters.

Medium

Should be addressed during normal development.

Low

Future improvements.

13. Recommended Target Architecture

Propose a modern architecture suitable for this project.

Include:

- Folder structure
- Feature organization
- Shared layer organization
- Hooks strategy
- API layer strategy
- State management strategy
- Testing strategy

Explain why.

14. Modernization Opportunities

Evaluate whether the following would provide value:

- React Query / TanStack Query
- Zustand
- Redux Toolkit
- React Hook Form
- Zod
- Feature-based architecture
- Domain-driven frontend design
- Storybook
- ESLint improvements
- Prettier
- Husky
- lint-staged
- Dependency boundaries
- Monorepo considerations

For each:

- Recommended? (Yes/No)
- Priority
- Expected impact
- Migration complexity

15. Refactoring Roadmap

Create a phased implementation plan.

Phase 1: Quick Wins (1-2 weeks)

Phase 2: Foundation Improvements (2-4 weeks)

Phase 3: Architecture Improvements (1-2 months)

Phase 4: Modernization & Scaling (ongoing)

For each phase provide:

- Goals
- Tasks
- Estimated effort
- Expected impact
- Risks

16. Final Deliverables

Produce:

1. Architecture Health Scorecard
2. Technical Debt Backlog
3. Prioritized Refactoring Backlog
4. Recommended Folder Structure
5. Architecture Decision Recommendations (ADR style)

Be extremely critical, objective, and evidence-based.

Do not make assumptions without inspecting the codebase.

Whenever possible, include file paths and concrete examples from the repository.