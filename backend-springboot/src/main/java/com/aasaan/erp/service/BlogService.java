package com.aasaan.erp.service;

import com.aasaan.erp.model.Blog;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BlogService {

    @Value("${aasaan.data.dir:./data}")
    private String dataDirPath;

    private final ObjectMapper objectMapper = new ObjectMapper();
    private File blogsFile;
    private final List<Blog> inMemoryBlogs = new ArrayList<>();

    @PostConstruct
    public void init() {
        File dataDir = new File(dataDirPath);
        if (!dataDir.exists()) {
            dataDir.mkdirs();
        }
        blogsFile = new File(dataDir, "blogs.json");
        loadFromFile();

        if (inMemoryBlogs.isEmpty()) {
            seedDefaultBlogs();
            saveToFile();
        }
    }

    private synchronized void loadFromFile() {
        if (blogsFile != null && blogsFile.exists()) {
            try {
                List<Blog> loaded = objectMapper.readValue(blogsFile, new TypeReference<List<Blog>>() {});
                inMemoryBlogs.clear();
                inMemoryBlogs.addAll(loaded);
            } catch (IOException e) {
                System.err.println("Could not read blogs file: " + e.getMessage());
            }
        }
    }

    private synchronized void saveToFile() {
        if (blogsFile != null) {
            try {
                objectMapper.writerWithDefaultPrettyPrinter().writeValue(blogsFile, inMemoryBlogs);
            } catch (IOException e) {
                System.err.println("Could not write blogs file: " + e.getMessage());
            }
        }
    }

    private void seedDefaultBlogs() {
        inMemoryBlogs.add(new Blog(
                "manufacturing-engineering",
                "Manufacturing & Engineering ERP: Mastering Multi-Level BOM & Shop Floor Routing",
                "BOM & Routing",
                "Manufacturing & Engineering",
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
                "6 min read",
                "Aasaan Manufacturing Practice Lead",
                "October 2026",
                "Discrete and process manufacturing with multi-level bill of materials, automated work centers, digital job cards, and scrap accounting.",
                "## The Modern Manufacturing Imperative\n\nIn discrete and precision engineering, production delays rarely stem from machine breakdowns alone—they stem from decoupled Bill of Materials (BOM), disconnected inventory reservations, and manual job-card routing across disparate plant shifts.\n\nAasaan ERP unifies your production floor directly with live procurement and financial ledgers.\n\n### Critical Challenges Solved\n\n1. **Complex Multi-Level BOMs**: Sub-assemblies, phantom assemblies, and revision tracking often lead to inaccurate material staging. Aasaan provides multi-tiered explosion with automated component reservation down to the child item level.\n2. **Work Center Capacity Bottlenecks**: Gain clear visibility into active machine spindle hours, planned preventive maintenance windows, and operator allocations across multiple shifts.\n3. **Scrap & Rework Tracking**: Capture yield variances directly at QA check points before issuing finished goods into warehouse inventory.\n\n### Key Capabilities in Aasaan ERP\n- **Visual Production Kanban**: Live drag-and-drop routing from raw material cutting to CNC machining, surface finishing, and assembly.\n- **Job Card Barcode/QR Scanning**: Floor operators scan batch tokens at terminal workstations to log time taken, scrap produced, and tool wear.\n- **Automated Reorder Planning (MRP)**: Generate purchase requisitions dynamically based on active sales commitments and safety thresholds.\n- **Sub-Contractor Work Order Lifecycle**: Issue job-work challans, monitor off-site WIP inventory, and reconcile subcontractor invoices with gate passes."
        ));

        inMemoryBlogs.add(new Blog(
                "dairy-industry",
                "Dairy Industry ERP: End-to-End Cold Chain, Fat/SNF Testing & Farmer Payouts",
                "Fat/SNF & Chilling",
                "Dairy Industry",
                "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=1200&q=80",
                "7 min read",
                "Aasaan Agri-Food Solutions Team",
                "October 2026",
                "Farmer collection center integration, automated milk testing telemetry, chilling depot tracking, and perishable batch distribution.",
                "## Transforming Perishable Milk Procurement & Distribution\n\nThe dairy sector faces unique logistical and quality challenges: highly perishable raw milk, volatile seasonal yields, twice-daily collection cycles, and strict regulatory standards on fat and SNF (Solids-Not-Fat) metrics.\n\nAasaan Dairy ERP bridges rural village collection centers (VCC), bulk milk cooling depots (BMC), processing plants, and cold-chain retail distribution into one synchronized nervous system.\n\n### Core Modules Tailored for Dairy Operations\n\n1. **Village Collection & Milk Analyzer Integration**:\n   - Direct serial/Bluetooth integration with ultrasonic milk analyzers and digital weighing scales.\n   - Automatic deduction of tare weight and instant calculation of Fat%, SNF%, and CLR.\n   - Real-time farmer slip printing and instant SMS notification of quantity and earned credit.\n\n2. **Automated Farmer Ledger & Payment Cycles**:\n   - Transparent weekly or ten-day billing based on differential rate matrices (two-axis pricing on Fat & SNF).\n   - Automated deductions for cattle feed, veterinary medicine loans, and advances directly from milk proceeds.\n\n3. **Bulk Milk Chilling (BMC) & Tanker Dispatch**:\n   - Temperature telemetry loggers tracking milk temperature from collection (4°C) to plant reception.\n   - Transit loss reconciliation comparing dispatch volume vs reception dock weighbridge.\n\n4. **Batch Processing, By-Products & FEFO Inventory**:\n   - Standardized batch recipes for pasteurized pouch milk, curd, paneer, butter, ghee, and flavored drinks.\n   - First-Expired-First-Out (FEFO) automated lot picking to eliminate inventory spoilage.\n   - Route-wise crate tracking and returnable packaging accounting."
        ));

        inMemoryBlogs.add(new Blog(
                "car-rental-fleet",
                "Fleet & Vehicle Rental ERP: Real-Time Telematics, Maintenance & Digital Contracts",
                "Fleet & Telematics",
                "Car Rental & Fleet Industry",
                "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
                "5 min read",
                "Aasaan Mobility Tech Team",
                "October 2026",
                "Vehicle telemetry, scheduled preventive maintenance, parts catalog, and automated rental agreements.",
                "## Scaling Modern Commercial Fleets & Rental Operations\n\nManaging large rental fleets demands razor-sharp oversight of asset utilization, routine maintenance schedules, toll/traffic challan reconciliations, and instant customer check-in/check-out.\n\n### Why Aasaan ERP for Fleet Operators?\n- **Digital Vehicle Onboarding**: Document expiry triggers for vehicle fitness, commercial permits, national road tax, and insurance renewals.\n- **Telematics & GPS Odometer Sync**: Automatic odometer and fuel gauge logging via OBD-II device APIs, automatically calculating service intervals and excess mileage surcharges.\n- **Preventive Maintenance Management**: Automatic job-order issuance for oil changes, brake pads, and tire rotations based on cumulative mileage.\n- **Dynamic Lease & Hourly Billing**: Instant generation of digital agreements with e-signature and fast security deposit refund workflows."
        ));

        inMemoryBlogs.add(new Blog(
                "chemical-process",
                "Chemical & Process Industry ERP: Strict Batch Potency, MSDS & Hazard Compliance",
                "Batch & Formula",
                "Chemical & Process Industry",
                "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
                "6 min read",
                "Aasaan Compliance & Chemical Lead",
                "October 2026",
                "Formula management, dangerous goods compliance, MSDS tracking, and strict potency batch controls.",
                "## Safety, Precision & Formula Control in Process Manufacturing\n\nChemical and formulation manufacturers cannot tolerate variance in active ingredient potency, solvent mixing ratios, or environmental safety compliance.\n\n### What Aasaan Chemical ERP Delivers\n- **Confidential Formula Management**: Versioned recipe formulas with granular role-based access to safeguard intellectual property.\n- **Potency & Active Ingredient Normalization**: Dynamic raw material quantity adjustment based on assay purity percentages of incoming solvent lots.\n- **MSDS & Dangerous Goods Labeling**: Automatic generation of Material Safety Data Sheets and GHS hazmat shipping documentation.\n- **Yield Variance & Solvent Recovery**: Track distillation efficiency and recovered solvent recycling directly within the general ledger."
        ));

        inMemoryBlogs.add(new Blog(
                "construction-epc",
                "Construction & EPC ERP: Milestone Billing, Subcontractor Ledger & Equipment Logs",
                "Project WBS & Billing",
                "Construction & EPC Building",
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
                "6 min read",
                "Aasaan Infrastructure Advisory",
                "October 2026",
                "Material consumption against milestones, subcontractor certified billing, and heavy equipment logs.",
                "## Project Profitability from Foundation to Handover\n\nInfrastructure projects frequently suffer from cost overruns due to delayed client measurement certificates, untracked site material pilferage, and idle heavy equipment.\n\n### Key Capabilities in Aasaan EPC ERP\n- **Work Breakdown Structure (WBS)**: Hierarchical project task trees with milestone percentage completion linked directly to progress billing.\n- **Site Material Indenting & Consumption**: Strict site store requisition controls matching engineering estimates to prevent over-allocation.\n- **Subcontractor RA Billing**: Automated retention money withholding, TDS compliance, and mobilization advance amortizations.\n- **Equipment & Fuel Logging**: Real-time tracking of excavator and crane working hours, idle time, and diesel consumption per cubic meter excavated."
        ));

        inMemoryBlogs.add(new Blog(
                "gems-jewelry",
                "Gems & Jewelry ERP: Purity Weighing, Casting Wastage & Hallmarking Control",
                "Purity & Carat Weighing",
                "Gems & Jewelry Manufacturing",
                "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
                "5 min read",
                "Aasaan Luxury & Precious Metals Team",
                "October 2026",
                "Precision precious metal weighing, casting wastage accounting, gemstone certification, and hallmarking.",
                "## Milligram Precision for Precious Metals & Gemstones\n\nIn the jewelry trade, every milligram of gold, platinum, and high-clarity diamond must be accounted for from raw bullion issue through casting, setting, polishing, and retail tagging.\n\n### Unique Features\n- **Four-Decimal Weighing Scale Sync**: Direct digital balance integration at all Karigar (artisan) handover points.\n- **Metal Loss & Fire Recovery Accounting**: Reconcile filing dust, polishing loss, and refining recovery balances per artisan batch.\n- **Diamond & Color Stone Packet Inventory**: Multi-attribute item catalogs tracking 4Cs (Cut, Clarity, Color, Carat) and certification serial numbers.\n- **BIS Hallmarking & HUID Compliance**: Seamless capture of Unique Identification numbers on all finished jewelry pieces."
        ));

        inMemoryBlogs.add(new Blog(
                "food-beverage",
                "Food & Beverage ERP: FEFO Cold Chain, Recipe Scaling & Quality Audits",
                "Cold Chain & FEFO",
                "Food & Beverage Processing",
                "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80",
                "6 min read",
                "Aasaan Food Science Technology Group",
                "October 2026",
                "Recipe management, catch-weight lot tracking, nutritional compliance, and temperature-controlled logistics.",
                "## Farm-to-Fork Traceability and Hygiene Compliance\n\nFood processing operations must guarantee freshness, eliminate expiry waste, and maintain comprehensive audit trails for food safety certifications (FSSAI, HACCP, ISO 22000).\n\n### Key Features\n- **Catch-Weight Inventory**: Dual unit-of-measure accounting (cases vs kilograms) for variable weight meat, poultry, and produce.\n- **Strict FEFO Expiry Safeguards**: Prevent shipping of lots nearing shelf-life expiry dates.\n- **Instant Backward & Forward Recall**: Trace every distributed batch back to specific ingredient suppliers and production shifts in seconds.\n- **Nutritional & Allergen Labeling**: Automated calorie and ingredient breakdown for retail packaging compliance."
        ));

        inMemoryBlogs.add(new Blog(
                "high-tech-electronics",
                "High-Tech & Electronics ERP: Component Serialization, SMD Reels & RMA Logistics",
                "Serial & RMA Tracking",
                "High-Tech & Electronics",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
                "6 min read",
                "Aasaan High-Tech Engineering Group",
                "October 2026",
                "Component-level serialization, warranty RMA tracking, SMD reel counters, and automated PCB assembly schedules.",
                "## Precision Traceability for High-Velocity Tech Manufacturing\n\nWith shrinking product lifecycles and micro-component bills of materials, electronics manufacturers require automated serialization and warranty tracking.\n\n### Core Architecture\n- **Multi-Level Serial Number Trees**: Link motherboard, display panel, power supply, and outer chassis serials into one unified digital passport.\n- **SMD Reel Feeder Accounting**: Track surface-mount component pick counts, reel remnant balances, and moisture sensitivity levels.\n- **Warranty & Reverse Logistics (RMA)**: Complete ticket management from customer return authorization to diagnostic repair, component replacement, and dispatch."
        ));
    }

    public synchronized List<Blog> getAllBlogs() {
        return new ArrayList<>(inMemoryBlogs);
    }

    public synchronized Optional<Blog> getBlogBySlug(String slug) {
        if (slug == null) return Optional.empty();
        return inMemoryBlogs.stream()
                .filter(b -> b.getSlug().equalsIgnoreCase(slug.trim()))
                .findFirst();
    }

    public synchronized Blog saveOrUpdateBlog(String slug, Blog blog) {
        if (slug == null || slug.isBlank()) {
            slug = blog.getTitle().toLowerCase().replaceAll("[^a-z0-9]+", "-");
        }
        blog.setSlug(slug);

        for (int i = 0; i < inMemoryBlogs.size(); i++) {
            if (inMemoryBlogs.get(i).getSlug().equalsIgnoreCase(slug)) {
                inMemoryBlogs.set(i, blog);
                saveToFile();
                return blog;
            }
        }

        inMemoryBlogs.add(blog);
        saveToFile();
        return blog;
    }

    public synchronized boolean deleteBlog(String slug) {
        boolean removed = inMemoryBlogs.removeIf(b -> b.getSlug().equalsIgnoreCase(slug));
        if (removed) {
            saveToFile();
        }
        return removed;
    }
}
